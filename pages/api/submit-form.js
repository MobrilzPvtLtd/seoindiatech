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