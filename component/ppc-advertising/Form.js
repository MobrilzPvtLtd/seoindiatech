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

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    fullName: "",

    phone: "",

    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const benefits = [
    {
      icon: <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Data-Driven Campaigns",
      description:
        "Every decision is based on analytics and real-time performance data.",
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Expert Ad Management",
      description:
        "We optimize budgets to ensure maximum return on investment (ROI).",
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Targeted Audience Reach",
      description: "Advanced audience segmentation for hyper-targeted ads.",
    },
    {
      icon: (
        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      ),
      title: "Transparent Reporting",
      description: "Track progress with detailed performance insights.",
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Ongoing Optimization",
      description:
        "Continuous A/B testing and refinement for higher conversions.",
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
      id: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      icon: <User className="w-5 h-5 text-gray-400" />,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      required: false,
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
      {/* Background decorative elements */}
      <ToastContainer />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl relative z-10">
          {/* LEFT COLUMN - BENEFITS */}
          <div className="flex flex-col justify-center rounded-2xl p-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 w-fit">
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Why Choose Digitalyzeit for PPC?
            </h2>

            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-8 hidden md:block"></div>

            <div className="space-y-5 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 dark:bg-blue-700 p-5 rounded-xl border border-blue-500 dark:border-blue-600 mt-8 shadow-md text-center">
              <h3 className="text-white text-xl font-bold">
                Start Driving Results Today!
              </h3>
              <p className="text-blue-100 dark:text-blue-200 mt-2">
                Fill out the form, and let's get started on your PPC journey.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <form
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 space-y-5 border border-gray-200 dark:border-gray-700 flex flex-col justify-between shadow-inner"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Email{" "}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Full Name{" "}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  Phone Number{" "}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              {/* <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none dark:text-white"
                  placeholder="Your Company"
                />
              </div> */}
              <div>
                <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
                  How can we help?
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-gray-700 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none resize-none dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
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
            </div>
            {/* Submit Button at the bottom */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center group disabled:opacity-60"
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
