import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-apple-gray/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We are a team of visionaries, creators, and problem solvers dedicated to redefining the digital landscape.
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
                            At Laxa, we believe that technology should feel natural. Our mission is to bridge the gap between complex code and human emotion. We don't just build websites; we create digital environments that people love to inhabit.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-apple-dark">Our History</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Founded on the principles of simplicity and excellence, Laxa started as a small collective of designers and developers who wanted to bring the "Apple touch" to the broader web. Today, we help brands across the globe tell their stories with clarity and impact.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                    >
                        {/* Placeholder for team/office image - using a gradient for now to keep it clean */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Team Image / Office Shot</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
