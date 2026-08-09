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
import { useFormTracking } from '@/hooks/useFormTracking'

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
  const { onFormInteraction, trackSubmitSuccess, trackSubmitError } = useFormTracking({
    formName: 'digital_branding_form',
    formType: 'service_inquiry',
  });

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
      trackSubmitSuccess();
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
      trackSubmitError();
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
      className="bg-gradient-to-br from-cream to-background dark:from-background dark:to-secondary/40 py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-card dark:bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-xl">
          {/* LEFT COLUMN */}
          <div className="w-full flex flex-col justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 dark:bg-primary/25 text-primary dark:text-accent rounded-full text-sm font-medium mb-4">
                <span>Elevate Your Brand</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
                Take Your Brand to the Next Level
              </h2>

              <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-6"></div>

              <p
                className="text-body text-base md:text-lg "
              >
                Your brand deserves to
                <span className="text-primary dark:text-accent font-semibold">
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
              <div className="flex flex-col items-center text-center bg-card dark:bg-card rounded-xl p-6 border border-border shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-primary dark:bg-primary" />
                <div className="bg-primary dark:bg-primary-hover text-white rounded-full p-3 mb-4 z-10 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  Schedule a Free Consultation
                </h3>
                <p className="text-muted text-sm">
                  to talk about your branding vision. Let's build a brand that
                  stands out and endures!
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center bg-card dark:bg-card rounded-xl p-6 border border-border shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 h-full w-2 rounded-bl-xl rounded-tl-xl bg-primary dark:bg-primary" />
                <div className="bg-primary dark:bg-primary-hover text-white rounded-full p-3 mb-4 z-10 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  Get Started Today
                </h3>
                <p className="text-muted text-sm">
                  Connect with us and take your brand to the top of the digital
                  world.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <p className="text-heading dark:text-gray-200 font-bold text-lg">
                SEO India Tech - Making Brands Shine in the Digital World.
              </p>

              <div className="flex items-center space-x-2 text-sm text-muted">
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
                      className="inline-flex items-center px-3 py-1 bg-cream dark:bg-surface text-heading dark:text-gray-200 text-xs font-medium rounded-full"
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
            className="bg-background rounded-2xl p-6 sm:p-8 space-y-5 border border-border flex flex-col justify-between shadow-inner"
            action="/api/submit-form"
            onSubmit={handleSubmit}
            onFocus={onFormInteraction}
          >
            <div className="space-y-5">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block font-medium mb-1 text-body"
                  >
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-red-600 dark:text-red-400">*</span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      value={form[field.id] || ""}
                      onChange={handleChange}
                      className="w-full p-3 pl-10 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none dark:text-white"
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
                <label
                  htmlFor="message"
                  className="block font-medium mb-1 text-body"
                >
                  How can we help?
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 pl-10 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none resize-none dark:text-white"
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
                  className="mt-1.5 h-4 w-4 rounded text-body border-border focus:ring-primary dark:border-gray-600 dark:bg-surface dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 text-sm text-muted"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
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
                className="cursor-pointer w-full bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center group disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-muted mt-3">
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
