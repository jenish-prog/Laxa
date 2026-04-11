import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    if (!phone) return true;
    const re = /^[\d\s\-+()]{10,}$/;
    return re.test(phone);
};

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [validationErrors, setValidationErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (validationErrors[name]) {
            setValidationErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.user_name.trim()) {
            errors.user_name = 'Name is required';
        }
        if (!formData.user_email.trim()) {
            errors.user_email = 'Email is required';
        } else if (!validateEmail(formData.user_email)) {
            errors.user_email = 'Please enter a valid email';
        }
        if (formData.phone && !validatePhone(formData.phone)) {
            errors.phone = 'Please enter a valid phone number';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }
        return errors;
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);
        setError(false);
        setErrorMessage('');

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            setIsSubmitting(false);
            return;
        }

        try {
            const formDataJSON = {
                name: formData.user_name,
                email: formData.user_email, // This triggers FormSubmit's auto-reply
                phone: formData.phone || 'Not provided',
                subject: formData.subject,
                message: formData.message,
                _subject: "New Mail from LaxaTech Website",
                _autoresponse: "Thank you for reaching out! Our team will contact you soon.",
                _template: "table",
                _captcha: "false"
            };

            const response = await fetch("https://formsubmit.co/ajax/jenish112005@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataJSON)
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setSuccess(true);
                form.current.reset();
                setFormData({
                    user_name: '',
                    user_email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                console.error("FormSubmit response:", result);
                throw new Error("Failed to send");
            }
        } catch (err) {
            console.error('Email send failed', err);
            setError(true);
            setErrorMessage('Failed to send message. Please try again or email us directly at jenish112005@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-apple-gray/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-6">Let&apos;s Build Together</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Ready to start your next project? We&apos;d love to hear from you.
                            Tell us about your vision, and we&apos;ll help you bring it to life.
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
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors ${validationErrors.user_name ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="John Doe"
                                    />
                                    {validationErrors.user_name && (
                                        <p className="mt-1 text-xs text-red-500">{validationErrors.user_name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors ${validationErrors.user_email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="john@example.com"
                                    />
                                    {validationErrors.user_email && (
                                        <p className="mt-1 text-xs text-red-500">{validationErrors.user_email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors ${validationErrors.phone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    {validationErrors.phone && (
                                        <p className="mt-1 text-xs text-red-500">{validationErrors.phone}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors ${validationErrors.subject ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                        placeholder="Project Inquiry"
                                    />
                                    {validationErrors.subject && (
                                        <p className="mt-1 text-xs text-red-500">{validationErrors.subject}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors resize-none ${validationErrors.message ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                                    placeholder="Tell us about your project..."
                                />
                                {validationErrors.message && (
                                    <p className="mt-1 text-xs text-red-500">{validationErrors.message}</p>
                                )}
                            </div>

                            {success && (
                                <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
                                    <CheckCircle size={18} />
                                    Message sent successfully! Check your email for confirmation. We&apos;ll get back to you soon.
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2">
                                    <XCircle size={18} />
                                    {errorMessage}
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
