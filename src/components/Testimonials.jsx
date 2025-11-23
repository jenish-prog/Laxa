import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "Laxa transformed our digital presence. Their attention to detail and understanding of our brand was exceptional.",
        author: "Sarah Johnson",
        role: "CEO, TechStart",
        initials: "SJ"
    },
    {
        id: 2,
        content: "The team delivered beyond our expectations. The new site is not just beautiful, it converts.",
        author: "Michael Chen",
        role: "Marketing Director, GrowthCo",
        initials: "MC"
    },
    {
        id: 3,
        content: "Working with Laxa was seamless. They understood the psychology of our users perfectly.",
        author: "Elena Rodriguez",
        role: "Founder, DesignLab",
        initials: "ER"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Client Stories</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-apple-gray relative"
                        >
                            <Quote className="absolute top-8 left-8 text-apple-blue/20 w-12 h-12" />
                            <p className="text-gray-600 leading-relaxed mb-8 relative z-10 pt-6">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-apple-blue to-purple-500 flex items-center justify-center text-white font-bold text-sm mr-4">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-apple-dark">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
