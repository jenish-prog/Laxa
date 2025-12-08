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
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Workflow Automation</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Custom bots that handle customer support, scheduling, and data entry 24/7.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Content Generation</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">AI pipelines that repurpose your long-form video into blogs, tweets, and shorts.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Smart Analytics</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Dashboards that predict trends and visitor behavior using machine learning.</p>
                            </motion.div>
                        </div>
                    </div>

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
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Website Building</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">High-performance websites and landing pages designed psychologically to turn visitors into customers.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">App Development</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Native and cross-platform mobile applications designed for intuitive daily use.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">User-centric interfaces that are as beautiful as they are functional.</p>
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
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Brand Strategy</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Identity design and strategic positioning to help you stand out in a crowded market.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Cinematic Editing</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Story-driven video editing that keeps retention high across YouTube and Reels.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                                <h4 className="font-semibold text-lg mb-2">Growth Systems</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">End-to-end funnels that capture leads and nurture them automatically.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
