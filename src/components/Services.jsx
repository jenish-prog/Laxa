import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Bot, Smartphone, Globe, PenTool } from 'lucide-react';

const services = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Responsive, fast, and secure websites built with modern frameworks like React and Next.js.',
    },
    {
        icon: <Video className="w-8 h-8" />,
        title: 'Video Editing',
        description: 'Cinematic storytelling that captures attention and communicates your message effectively.',
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: 'AI Integration',
        description: 'Leverage the power of Artificial Intelligence to automate workflows and enhance user experiences.',
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'App Development',
        description: 'Native and cross-platform mobile applications designed for intuitive daily use.',
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: 'UI/UX Design',
        description: 'User-centric interfaces that are as beautiful as they are functional.',
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Custom Software',
        description: 'Tailored solutions to solve your unique business challenges and scale with you.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Our Services</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Comprehensive digital solutions crafted with precision and care.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Web & App Development Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Globe className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-apple-dark">Web & App Development</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Website Building</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    High-performance Next.js websites designed to convert. Includes SEO, analytics, and CMS integration.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: React, Tailwind, Framer Motion</p>
                                    <p>Timeline: 2-4 Weeks</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">App Development</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Scalable mobile apps for iOS and Android. Built with React Native for native performance and shared codebase.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: React Native, Expo, Supabase</p>
                                    <p>Timeline: 4-8 Weeks</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    User-centric design systems and prototypes that validate your idea before build.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Output: Figma, Design System, Assets</p>
                                    <p>Timeline: 1-2 Weeks</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                        </div>
                    </div>

                    {/* AI Tools Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Bot className="w-8 h-8 text-apple-blue" />
                            <h3 className="text-2xl font-bold text-apple-dark">AI Tools & Automation</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Workflow Automation</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Custom bots that handle support and data entry 24/7, reducing manual work by 80%.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: OpenAI API, Zapier, Python</p>
                                    <p>Starting at $1,500</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Content Generation</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    AI pipelines that repurpose video into blogs and tweets automatically.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Output: Blog, Social Posts, Newsletter</p>
                                    <p>Timeline: 1 Week setup</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Smart Analytics</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Dashboards that predict trends using ML on your existing data.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: Python, Pandas, Streamlit</p>
                                    <p>Timeline: 2-3 Weeks</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                        </div>
                    </div>

                    {/* For Creators Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Video className="w-8 h-8 text-purple-600" />
                            <h3 className="text-2xl font-bold text-apple-dark">For Creators & Brands</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Brand Strategy</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Identity design and positioning to help you stand out.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Output: Brand Book, Logo, Voice</p>
                                    <p>Timeline: 2 Weeks</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Cinematic Editing</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Story-driven editing for YouTube and Reels. High retention guaranteed.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: Premiere Pro, After Effects</p>
                                    <p>Turnaround: 48 Hours</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col"
                            >
                                <h4 className="font-semibold text-lg mb-2">Growth Systems</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    Funnel setup: Landing Page → Email → Sale.
                                </p>
                                <div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-100">
                                    <p>Stack: ConvertKit, Webflow, Stripe</p>
                                    <p>Timeline: 1 Week</p>
                                </div>
                                <a href="#contact" className="text-apple-blue font-medium text-sm hover:underline mt-auto">Learn more →</a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 mb-4">Not sure what you need?</p>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-apple-dark rounded-full hover:bg-gray-800 transition-all">
                        Book a Free Strategy Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
