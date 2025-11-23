import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import web1 from '../assets/web 1.png';
import ai from '../assets/ai.png';
import portfolioSite from '../assets/Portfolio Site.png';
import ai2 from '../assets/ai2.png';
import v1 from '../assets/v1.jpeg';
import v2 from '../assets/v2.jpg';

const categories = ['All', 'Web', 'Video', 'AI'];

const projects = [
    { id: 1, title: 'Code visualizer', category: 'Web', image: web1 },
    { id: 2, title: 'Brand Documentary', category: 'Video', image: v1 },
    { id: 3, title: 'LLM', category: 'AI', image: ai },
    { id: 4, title: 'Portfolio Site', category: 'Web', image: portfolioSite },
    { id: 5, title: 'Product Launch', category: 'Video', image: v2 },
    { id: 6, title: 'AI Chatbot', category: 'AI', image: ai2 },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 bg-apple-gray/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-4">Selected Work</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        A showcase of our passion and expertise in action.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-apple-dark text-white shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                            >
                                {project.image.startsWith('bg-') ? (
                                    <div className={`w-full h-full ${project.image} transition-transform duration-500 group-hover:scale-105`} />
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-4">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full inline-block backdrop-blur-sm">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
