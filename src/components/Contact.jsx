import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-apple-blue focus:bg-white focus:ring-0 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-apple-dark text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
