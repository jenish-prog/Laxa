import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-dark mb-6">
                        Think Different. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-purple-600">
                            Build Extraordinary.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
                        We craft digital experiences that understand human psychology.
                        Elegant, intuitive, and designed to connect.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3.5 text-base font-medium text-white bg-apple-dark rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
                        >
                            Start a Project
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-3.5 text-base font-medium text-apple-dark bg-gray-100 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
                        >
                            View Our Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
            </div>
        </section>
    );
};

export default Hero;
