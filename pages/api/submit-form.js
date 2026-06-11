import { getStrapiURL } from "../../utils/api";
import { sendContactFormEmail } from "../../utils/sendEmail";
import fs from "fs";
import path from "path";

function saveSubmissionLocally(body) {
  try {
    const dir = path.join(process.cwd(), "submissions");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${Date.now()}.json`);
    fs.writeFileSync(file, JSON.stringify(body, null, 2));
    console.log("Submission saved locally:", file);
    return true;
  } catch (err) {
    console.error("Failed to save submission locally:", err);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Use POST to submit the form" });
  }

  console.log("POST request received at /api/submit-form");

  try {
    const reqBody = req.body;
    console.log("Request body:", reqBody);

    // Normalize: some forms send { data: formFields } and some send flat fields
    const body = reqBody.data || reqBody;

    // Always save locally
    saveSubmissionLocally(body);

    // Try Strapi (non-fatal)
    try {
      const formData = {
        data: {
          Inquirytype: "Contact Us Page",
          fullName: body.fullName,
          email: body.email,
          phone: body.phone?.replace(/[^0-9+]/g, "") || null,
          inquiryType: body.inquiryType?.toLowerCase() || "contact",
          message: body.message,
          wantsAppointment: body.wantsAppointment || null,
          appointmentDate: body.appointmentDate || null,
          appointmentTime: body.appointmentTime || null,
          meetingType: body.meetingType || null,
        },
      };

      console.log("Form data sent to Strapi:", JSON.stringify(formData));
      console.log("Strapi URL:", getStrapiURL("/api/form-messages"));

      const response = await fetch(getStrapiURL("/api/form-messages"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Strapi response status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Strapi response error:", errorText);
      } else {
        const data = await response.json();
        console.log("Strapi submission successful");
      }
    } catch (strapiError) {
      console.error("Strapi submission failed (non-fatal):", strapiError.message);
    }

    // Send confirmation emails (non-fatal)
    try {
      await sendContactFormEmail(body);
      console.log("Contact form emails sent successfully");
    } catch (emailError) {
      console.error("Error sending confirmation emails:", emailError);
    }

    res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in /api/submit-form:", error);
    res.status(500).json({
      message: "Error submitting form",
      error: error.message,
    });
  }
}