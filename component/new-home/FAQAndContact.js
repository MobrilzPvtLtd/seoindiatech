import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiPlus, FiCheck, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
    {
        question: 'What SEO services do you offer?',
        answer: 'We offer comprehensive SEO services including technical SEO, on-page optimization, and off-page link building.',
    },
    {
        question: 'How long does it take to see results?',
        answer: 'SEO is a long-term strategy. Significant results typically take 3-6 months depending on competition.',
    },
    {
        question: 'Do you follow white-hat practices?',
        answer: 'Absolutely. We strictly follow Google\'s guidelines to ensure sustainable, long-term growth.',
    },
    {
        question: 'How do you report performance?',
        answer: 'We provide detailed weekly reports covering keyword rankings, traffic growth, and conversions.',
    },
];

const FAQAndContact = () => {
    const containerRef = useRef(null);
    const [form, setForm] = useState({ fullName: '', email: '', phone: '', message: '' });
    const [openIndex, setOpenIndex] = useState(0);
    const [focusedField, setFocusedField] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null);
    const [privacyAgreed, setPrivacyAgreed] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from('.animate-in', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const isFormValid = () => {
        return (
            form.fullName.trim() !== '' &&
            form.email.trim() !== '' &&
            form.phone.trim() !== '' &&
            form.message.trim() !== '' &&
            privacyAgreed &&
            recaptcha !== null
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error('Form submission failed');

            await response.json();
            toast.success('Message Sent Successfully!');
            setForm({ fullName: '', email: '', phone: '', message: '' });
            setPrivacyAgreed(false);
            setRecaptcha(null);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2500);
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const fields = [
        { name: 'fullName', label: 'Name', placeholder: 'Enter your full name', icon: FiUser, type: 'text', half: true },
        { name: 'phone', label: 'Phone', placeholder: 'Phone number', icon: FiPhone, type: 'tel', half: true },
        { name: 'email', label: 'Email', placeholder: 'email@example.com', icon: FiMail, type: 'email', half: false },
    ];

    return (
        <section ref={containerRef} className="relative bg-white dark:bg-slate-950 py-8 md:py-10 overflow-hidden">
            <ToastContainer />
            {/* Ambient background texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0066FF 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">

                    {/* LEFT: FAQ SECTION */}
                    <div className="animate-in lg:col-span-3">
                        <div className="mb-12">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                Frequently Asked Questions

                            </h2>
                            <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                                Everything you need to know before we start working together. Can't find what you're looking for? Send us a message.
                            </p>
                        </div>

                        <div className="space-y-1">
                            {faqs.map((faq, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div
                                        key={i}
                                        className="group border-b border-slate-100 dark:border-slate-800"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                            className="w-full flex items-center gap-4 py-6 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span
                                                className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${isOpen
                                                    ? 'bg-[#0066FF] border-[#0066FF] rotate-45'
                                                    : 'bg-transparent border-slate-200 dark:border-slate-700 group-hover:border-[#0066FF]/50'
                                                    }`}
                                            >
                                                <FiPlus className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-[#0066FF]'}`} />
                                            </span>
                                            <span
                                                className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                        </button>

                                        <div
                                            className="grid transition-[grid-template-rows] duration-400 ease-out"
                                            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="pb-6 pl-13 text-slate-500 dark:text-slate-400 leading-relaxed pr-4" style={{ paddingLeft: '3.25rem' }}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: CONTACT CARD */}
                    <div className="animate-in contact-card relative rounded-[2.5rem] p-6 sm:p-8 overflow-hidden shadow-2xl shadow-blue-600/20 bg-gradient-to-br from-[#0066FF] via-[#0057DB] to-[#003E9E] lg:col-span-2">
                        {/* Decorative orbs */}
                        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -top-20 -left-20 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
                        <div
                            className="absolute inset-0 opacity-[0.06] pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        />

                        <div className="relative z-10">
                            <header className="mb-5">
                                {/* <span className="text-xs font-semibold tracking-widest text-blue-100/70 uppercase">Get in touch</span> */}
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-1 tracking-tight">Send a message</h2>
                                <p className="text-blue-100/70 text-xs leading-relaxed">Tell us a bit about your project and we'll reply within one business day.</p>
                            </header>

                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {fields.filter(f => f.half).map((f) => (
                                        <div key={f.name} className="space-y-1">
                                            <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                                            <div
                                                className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all duration-200 ${focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                                                    }`}
                                            >
                                                <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                                                <input
                                                    type={f.type}
                                                    name={f.name}
                                                    placeholder={f.placeholder}
                                                    value={form[f.name]}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField(f.name)}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full bg-transparent text-xs text-white placeholder-white/40 outline-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {fields.filter(f => !f.half).map((f) => (
                                    <div key={f.name} className="space-y-1">
                                        <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                                        <div
                                            className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all duration-200 ${focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                                                }`}
                                        >
                                            <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                                            <input
                                                type={f.type}
                                                name={f.name}
                                                placeholder={f.placeholder}
                                                value={form[f.name]}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField(f.name)}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full bg-transparent text-xs text-white placeholder-white/40 outline-none"
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">Message</label>
                                    <div
                                        className={`flex items-start gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all duration-200 ${focusedField === 'message' ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                                            }`}
                                    >
                                        <FiMessageSquare className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                                        <textarea
                                            name="message"
                                            placeholder="How can we help?"
                                            value={form.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            maxLength={180}
                                            rows={2}
                                            className="w-full resize-none bg-transparent text-xs text-white placeholder-white/40 outline-none"
                                        />
                                    </div>
                                    <div className="text-[10px] text-white/40 text-right">{form.message.length} / 180</div>
                                </div>

                                <div className="flex items-center gap-2 pt-0.5">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-white/30 text-blue-500 focus:ring-blue-500"
                                        checked={privacyAgreed}
                                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                                        required
                                    />
                                    <span className="text-white/60 text-xs">
                                        I agree to the{' '}
                                        <a href="#" className="text-white/80 hover:underline">Privacy Policy</a>
                                    </span>
                                </div>

                                <ReCAPTCHA
                                    sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                                    className="mx-auto"
                                    onChange={setRecaptcha}
                                    size="normal"
                                />

                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid() || isSubmitting}
                                        className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black text-[#0066FF] transition-all duration-300 hover:shadow-xl hover:shadow-black/10 active:scale-[0.98] uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : submitted ? (
                                            <>
                                                Message sent
                                                <FiCheck className="h-4 w-4" />
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQAndContact;

