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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-apple-gray hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
                        >
                            <div className="mb-6 text-apple-blue transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-apple-dark mb-3">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
