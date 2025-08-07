// pages/api/submit-form.js
import { getStrapiURL } from "../../utlis/api";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("POST request received at /api/submit-form");
    try {
      const reqBody = req.body;
      console.log("Request body:", reqBody);

      const formData = {
        data: {
          Inquirytype: "Contact Us Page",
          fullName: reqBody.fullName,
          email: reqBody.email,
          phone: reqBody.phone?.replace(/[^0-9+]/g, "") || null,
          inquiryType: reqBody.inquiryType?.toLowerCase() || "contact", // Default to "contact"
          message: reqBody.message,
          wantsAppointment: reqBody.wantsAppointment || null,
          appointmentDate: reqBody.appointmentDate || null,
          appointmentTime: reqBody.appointmentTime || null,
          meetingType: reqBody.meetingType || null,
        },
      };

      console.log("Form data sent to Strapi:", JSON.stringify(formData));
      console.log("Strapi URL:", getStrapiURL("/api/form-messages"));

      const response = await fetch(getStrapiURL("/api/form-messages"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Strapi response status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Strapi response error:", errorText);
        throw new Error(`Form submission failed: ${errorText}`);
      }

      const data = await response.json();
    //   console.log("Strapi response data:", data);

      res.status(200).json(data);
    } catch (error) {
      console.error("Error in /api/submit-form:", error);
      res.status(500).json({
        message: "Error submitting form",
        error: error.message,
        stack: error.stack,
      });
    }
  } else {
    // console.log(`Received ${req.method} request at /api/submit-form`);
    res.status(405).json({ message: "Use POST to submit the form" });
  }
}