import React from 'react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-apple-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold tracking-tighter mb-4 block">laxa</a>
                        <p className="text-gray-400 max-w-sm">
                            Designing the future with simplicity and emotion. We build digital experiences that matter.
                        </p>
                    </div>

                    <div className="md:text-right">
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Laxa Inc. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/jenish-s-4aa3692b5" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/__.laxa__?igsh=cmRuOWNnYzZoejBk" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="https://github.com/LAXATech" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
