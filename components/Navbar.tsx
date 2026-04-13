"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when full-screen futuristic drawer is deployed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      clipPath: "circle(0% at 100% 0)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      clipPath: "circle(150% at 100% 0)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: -30, filter: "blur(5px)" },
    open: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <header className="navbar glass">
      <div className="navbar-container">
        <Link href="/" className="logo-link">
          <AnimatedLogo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Our Work</Link>
          <ThemeToggle />
          <Link href="/contact" className="cta-button">Get in Touch</Link>
        </nav>

        {/* Mobile Toggle Group */}
        <div className="mobile-toggle-group">
          <div className="mobile-theme-wrapper">
             <ThemeToggle />
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            style={{ width: '28px', height: '28px', position: 'relative' }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close-icon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Futuristic Responsive Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-drawer glass"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="mobile-nav-links">
              <motion.div variants={linkVariants}>
                <Link href="/">Home</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/about">About</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/services">Services</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/projects">Our Work</Link>
              </motion.div>
              <motion.div variants={linkVariants} style={{ marginTop: '2rem' }}>
                <Link href="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>Get in Touch</Link>
              </motion.div>
            </nav>
            
            {/* Cinematic Background Artifacts */}
            <motion.div 
              className="drawer-glow"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
