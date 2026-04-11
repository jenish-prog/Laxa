import React from 'react';
import { motion } from 'framer-motion';
import CEOImage from '../assets/j.jpg';
import MemberTwoImage from '../assets/a.jpeg?t=1';
import MemberThreeImage from '../assets/h.jpeg';

const teamMembers = [
    {
        label: 'Member 01',
        name: 'JENISH',
        role: 'Full Stack Developer',
        image: CEOImage,
        imagePosition: 'center 45%',
        imageScale: '1.2',
    },
    {
        label: 'Member 02',
        name: 'ANJAI',
        role: 'Deployment Process & Cybersecurity',
        image: MemberTwoImage,
        imagePosition: 'center 20%',
    },
    {
        label: 'Member 03',
        name: 'HAMDHAN HUSSAIN',
        role: 'Client Outreach',
        image: MemberThreeImage,
        imagePosition: 'center 52%',
    },
];

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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                >
                    {teamMembers.map((member) => (
                        <div key={member.name} className="rounded-2xl bg-white p-5 shadow-lg h-full flex flex-col">
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                    style={{ 
                                        objectPosition: member.imagePosition,
                                        transform: member.imageScale ? `scale(${member.imageScale})` : 'none'
                                    }}
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-400 mb-1">{member.label}</p>
                            <h3 className="text-xl font-semibold text-apple-dark">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
