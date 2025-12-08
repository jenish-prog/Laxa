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
                        AI-powered Web Experiences <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-purple-600">
                            For Creators & Startups.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
                        We design and build AI-driven web apps, brand sites, and digital products for startups and creators.
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
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-16 pt-8 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-400 mb-6 tracking-wide uppercase">Trusted by industry leaders</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-bold text-gray-400 hover:text-apple-dark flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                TechStart
                            </span>
                            <span className="text-xl font-bold text-gray-400 hover:text-apple-dark flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                GrowthCo
                            </span>
                            <span className="text-xl font-bold text-gray-400 hover:text-apple-dark flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                DesignLab
                            </span>
                        </div>
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
