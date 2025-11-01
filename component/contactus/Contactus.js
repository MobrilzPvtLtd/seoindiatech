import React, { useState } from "react";
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsSection = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formState.fullName.trim() !== "" &&
      formState.email.trim() !== "" &&
      formState.phone.trim() !== "" &&
      formState.message.trim() !== "" &&
      privacyAgreed &&
      recaptcha !== null
    );
  };

  // Submit handler for Strapi API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      await response.json();
      toast.success("Message Sent Successfully!");
      setFormState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setPrivacyAgreed(false);
      setRecaptcha(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6">
      <ToastContainer />
      {/* Top Heading */}
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Let's Start a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Conversation
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Fill out the form and one of our experts will contact you within 24
          hours
        </p>
      </div>
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto md:pl-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Form Card */}
        <div className="relative">
          <div className="absolute z-10 -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg">
            We're here to help you succeed
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 transition-all hover:shadow-2xl relative z-1">
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formState.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={180}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 dark:border-gray-600 rounded-lg p-3 outline-none focus:border-blue-600 dark:focus:border-blue-400 transition resize-none text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
                ></textarea>
                <div className="text-xs text-gray-400 dark:text-gray-500 text-right mt-1">
                  {formState.message.length} / 180
                </div>
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-center gap-3 mt-2">
                <label className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* ReCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                className="mx-auto"
                onChange={setRecaptcha}
              />

              <div>
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-600 font-medium px-8 py-3 rounded-full hover:cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70 blur-xl"></div>
          <div className="absolute -z-10 -top-4 -left-4 w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-70 blur-lg"></div>
        </div>

        {/* Right: Side Info */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Illustration */}
          <div className="mb-8 w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <img
              src="images/contactusbanner.png"
              alt="Contact illustration"
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contact Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 px-10 py-5 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Phone Numbers
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+201111772948"
                      className="text-blue-700 dark:text-blue-400 block hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      +91-7042573120
                    </a>
                    {/* <a
                      href="tel:+6282279400935"
                      className="hidden text-blue-700 dark:text-blue-400 block hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      +62 822 7940 0935
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:sales@seoindiatech.com"
                    className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    sales@seoindiatech.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Office Address
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    E 160, E Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301
 
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start hidden">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Business Hours
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;