import React, { useState } from "react";
import {
  Phone,
  ArrowRight,
  Shield,
  Users,
  Send,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      form.email.trim() !== "" &&
      form.fullName.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.privacy &&
      recaptcha !== null
    );
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.privacy) {
      toast.error("You must agree to the Privacy Policy and Terms of Service.");
      return;
    }
    setIsSubmitting(true);
    try {
      // Replace with your Strapi endpoint
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      if (!response.ok) throw new Error("Submission failed");
      toast.success("Request submitted successfully!");
      setForm({
        email: "",
        fullName: "",
        phone: "",
        message: "",
        privacy: false,
      });
      setRecaptcha(null);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      icon: <Mail className="w-5 h-5 text-gray-400" />,
    },
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      icon: <User className="w-5 h-5 text-gray-400" />,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      icon: <Phone className="w-5 h-5 text-gray-400" />,
    },
  ];

  return (
    <section
      id="Digitalform"
      className="bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl">
          {/* LEFT COLUMN */}
          <div className="w-full flex flex-col justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                <span>Elevate Your Brand</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Take Your Brand to the Next Level
              </h2>

              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

              <p
                className="text-gray-700 dark:text-gray-300 text-base md:text-lg "
              >
                Your brand deserves to
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  {" "}
                  stand out, connect, and grow.
                </span>{" "}
                Whether you're starting from scratch or need a digital makeover,
                SEO India Tech has the expertise to make it happen.
              </p>
            </div>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-blue-600 dark:bg-blue-500" />
                <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-full p-3 mb-4 z-10 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Schedule a Free Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  to talk about your branding vision. Let’s build a brand that
                  stands out and endures!
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-blue-600 dark:bg-blue-500" />
                <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-full p-3 mb-4 z-10 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Connect with us and take your brand to the top of the digital
                  world.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <p className="text-gray-800 dark:text-gray-200 font-bold text-lg">
                SEO India Tech - Making Brands Shine in the Digital World.
              </p>

              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4" />
                <span>
                  Your information is secure and will never be shared.
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Branding", "Strategy", "Design", "Digital Marketing"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <form
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-200 dark:border-gray-700 flex flex-col justify-between shadow-inner"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-red-600 dark:text-red-400">*</span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type={field.type}
                      name={field.id}
                      value={form[field.id] || ""}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                      placeholder={
                        field.id === "email"
                          ? "your@email.com"
                          : field.id === "phone"
                          ? "+1 (555) 123-4567"
                          : field.label
                      }
                      required={field.required}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      {field.icon}
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  How can we help?
                </label>
                <div className="relative">
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none resize-none dark:text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <div className="absolute left-3 top-3">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="mt-1.5 h-4 w-4 rounded text-gray-700 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Terms of Service
                  </a>
                </label>
              </div>
              <ReCAPTCHA
                sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                className="mx-auto"
                onChange={setRecaptcha}
              />
            </div>
            {/* Submit Button at the bottom */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center group disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                We'll get back to you within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
