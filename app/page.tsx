"use client";
import './page.css';
import { motion } from 'framer-motion';
import { Monitor, Code2, Database, BrainCircuit, LayoutTemplate, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import HeroLogo from '../components/HeroLogo';
import CyberNeuralNetwork from '../components/CyberNeuralNetwork';

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

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        {/* Animated Cyber Background */}
        <div className="hero-cyber-bg" />
        <CyberNeuralNetwork />

        <HeroLogo />
      </section>

      {/* Intro Content Section */}
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
              Start Your Project <ArrowRight size={18} />
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
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deliver end-to-end solutions designed to scale with your business ambition.
          </motion.p>
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

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services" className="btn-secondary">Explore All Services</Link>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section" style={{ background: 'rgba(255,255,255,0.015)', padding: '6rem 2rem', borderRadius: '20px' }}>
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-description">A glimpse into the systems we've revolutionized.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            background: 'rgba(var(--primary-rgb), 0.03)',
            borderRadius: '16px',
            border: '1px solid var(--card-border)',
            backdropFilter: 'blur(12px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow accent */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.08), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <h3
            className="text-gradient font-orbitron"
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
          >
            Coming Soon
          </h3>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
