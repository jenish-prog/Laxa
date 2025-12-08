import React from 'react';
import { motion } from 'framer-motion';
import CEOImage from '../assets/CEO.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-apple-gray/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We are an AI web app studio building the next generation of digital tools for creators and startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-apple-dark">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At Laxa, our mission is to empower creators with AI tools that automate the boring stuff.
                            We bridge the gap between complex code and creative freedom, building web experiences that don't just look good—they work for you.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-apple-dark">Our Evolution</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Started as a design collective, we've evolved into a full-stack AI studio. Today, we help brands across the globe leverage artificial intelligence to scale their content and products without losing their human touch.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={CEOImage}
                            alt="CEO of Laxa Digital Agency"
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
