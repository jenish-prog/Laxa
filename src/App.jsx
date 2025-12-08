import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SEO from './components/SEO';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay removed for better UX
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-apple-blue selection:text-white">
      <SEO
        title="LaxaTech – AI-powered web & app studio"
        description="We design and build AI-driven web apps, brand sites, and digital products for startups and creators."
        keywords="AI web studio, web app development, startup tools, creator economy, React, Next.js"
      />
      <LoadingScreen isLoading={isLoading} />

      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
