import {
  ArrowRight,
  BarChart,
  Briefcase,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Target,
  User,
} from "lucide-react";
import { useState } from "react";
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
    formName: 'ppc_form',
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

  const benefits = [
    {
      icon: <BarChart className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Data-Driven Campaigns",
      description:
        "All decisions are driven by analytics and real-time performance data.",
    },
    {
      icon: <Target className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Expert Ad Management",
      description:
        "Our strategies ensure every dollar spent delivers maximum ROI.",
    },
    {
      icon: <Target className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Targeted Audience Reach",
      description: "Advanced targeting to reach the right audience with every ad.",
    },
    {
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
      title: "Transparent Reporting",
      description: "Gain detailed insights to track campaign performance effectively.",
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Ongoing Optimization",
      description:
        "Refining campaigns through constant A/B testing for better results.",
    },
  ];

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
    {
      id: "company",
      label: "Company Name",
      type: "text",
      required: false,
      icon: <Briefcase className="w-5 h-5 text-gray-400" />,
    },
  ];

  return (
    <section id="PPCform" className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900 py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <ToastContainer />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card dark:bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-xl relative z-10">
          {/* LEFT COLUMN - BENEFITS */}
          <div className="flex flex-col justify-center rounded-2xl p-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6 w-fit">
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-6 text-center md:text-left">
              Why Choose SEO India Tech for PPC?
            </h2>

            <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-8 hidden md:block"></div>

            <div className="space-y-5 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary dark:bg-primary-hover p-5 rounded-xl border border-primary dark:border-primary mt-8 shadow-md text-center">
              <h3 className="text-white text-xl font-bold">
                Start Growing Your Business Now!
              </h3>
              <p className="text-white/90 dark:text-accent mt-2">
                Fill out the form, and let's get started on your PPC journey.
              </p>
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
              {formFields
                .filter((field) => field.id !== "company") // Exclude unused company field
                .map((field) => (
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
                        placeholder={field.id === "email" ? "your@email.com" : field.id === "phone" ? "+1 (555) 123-4567" : field.label}
                        required={field.required}
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">{field.icon}</div>
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