"use client";
import './page.css';
import { motion } from 'framer-motion';
import { Monitor, Code2, Database, BrainCircuit, LayoutTemplate, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import HeroLogo from '../components/HeroLogo';

export default function Home() {
  const services = [
    {
      title: "Landing Pages",
      description: "High-converting, stunning landing pages built to turn your visitors into customers.",
      icon: <LayoutTemplate size={28} />
    },
    {
      title: "Websites & CMS",
      description: "Custom websites with robust Content Management Systems for easy updates.",
      icon: <Monitor size={28} />
    },
    {
      title: "Systems & Platforms",
      description: "Complex web applications and scalable digital platforms built from scratch.",
      icon: <Code2 size={28} />
    },
    {
      title: "Databases",
      description: "Secure, optimized, and tailored database architectures for your growing data needs.",
      icon: <Database size={28} />
    },
    {
      title: "AI Integration",
      description: "Next-gen AI solutions seamlessly integrated to automate and supercharge your workflows.",
      icon: <BrainCircuit size={28} />
    }
  ];

  // Portfolio data removed per user request for "Coming soon" state

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <HeroLogo />
      </section>

      {/* Intro Content Section (Moved below Hero) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <motion.div 
          className="hero-content"
          style={{ margin: '0 auto', maxWidth: '900px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Next-Generation
            <br />
            <span className="text-gradient">Digital Systems.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Solveria Labs is your elite freelance team specializing in cutting-edge websites, robust CMS, tailored databases, and intelligent AI integrations.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-gradient">Expertise</span></h2>
          <p className="section-description">We deliver end-to-end solutions designed to scale with your business ambition.</p>
        </div>
        
        <div className="services-grid">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx} 
              className="service-card card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="service-icon-wrapper">
                {svc.icon}
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-description">{svc.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
           <Link href="/services" className="btn-secondary">Explore All Services</Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '6rem 2rem', borderRadius: '24px' }}>
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-description">A glimpse into the systems we've revolutionized.</p>
        </div>
        
        <motion.div 
          className="portfolio-coming-soon"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '16px', 
            border: '1px solid var(--card-border)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-gradient">Coming Soon</h3>
          <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem', fontSize: '1.1rem' }}>
            We're currently curating our finest projects to showcase here. Check back shortly!
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-header">
          <h2 className="section-title">Let's Build <span className="text-gradient">Together</span></h2>
          <p className="section-description">Ready to elevate your digital presence? Send us a message.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
