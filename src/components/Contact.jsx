import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);
        setError(false);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_dsnkl7m';
        const TEMPLATE_ID = 'template_jcmz8xs';
        const PUBLIC_KEY = 'ipT-OoYyUC_Eg1AOv';

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setSuccess(true);
                    setIsSubmitting(false);
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setError(true);
                    setIsSubmitting(false);
                },
            );
    };

    return (
        <section id="contact" className="py-20 bg-apple-gray/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-6">Let's Build Together</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Ready to start your next project? We'd love to hear from you.
                            Tell us about your vision, and we'll help you bring it to life.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-600">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-apple-blue">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg">jenish112005@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-600">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-apple-blue">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg">+91 7845742951</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-600">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-apple-blue">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-lg">Kanyakumari, Nagercoil</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {success && (
                                <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                                    Something went wrong. Please try again later or email us directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-apple-dark text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 size={18} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
