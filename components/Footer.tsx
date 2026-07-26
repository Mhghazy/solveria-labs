import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Solveria <span>Labs</span></h3>
          <p>Building next-generation digital systems and experiences.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/projects">Case Studies</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons-wrapper">
            <a href="https://www.facebook.com/profile.php?id=61570998157919&mibextid=ZbWKwL" className="social-icon fb-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="https://instagram.com/solveria4?utm_source=qr&igsh=MXJxY2xsaHU2Nzdwcw==" className="social-icon ig-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://wa.me/201288979593" className="social-icon wa-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0c-6.627 0-12.031 5.405-12.031 12.035 0 2.115.548 4.18 1.594 6l-1.594 5.965 6.136-1.593c1.821.947 3.844 1.458 5.895 1.458 6.626 0 12.031-5.405 12.031-12.035s-5.405-12.031-12.031-12.031zm0 22.035c-1.782 0-3.526-.454-5.074-1.311l-.364-.21-3.76 1.02.996-3.665-.231-.383c-.947-1.554-1.442-3.344-1.442-5.181 0-5.696 4.63-10.327 10.327-10.327s10.327 4.63 10.327 10.327-4.631 10.327-10.327 10.327zm5.545-7.558c-.304-.152-1.798-.887-2.076-.988-.278-.101-.481-.152-.684.152-.203.304-.785.989-.962 1.191-.177.203-.354.228-.658.076-1.192-.599-2.203-1.358-3.045-2.259-.652-.693-1.076-1.51-1.253-1.815-.177-.304-.019-.469.133-.62.139-.139.304-.355.456-.532.152-.177.203-.304.304-.506.101-.203.051-.38-.025-.532-.076-.152-.684-1.646-.937-2.254-.247-.595-.497-.514-.684-.523-.177-.008-.38-.01-.582-.01-.203 0-.532.076-.81.38s-1.064 1.038-1.064 2.532c0 1.494 1.089 2.938 1.241 3.14.152.203 2.144 3.275 5.195 4.593.727.315 1.294.502 1.737.643.731.233 1.396.199 1.921.121.587-.087 1.798-.735 2.051-1.444.253-.709.253-1.317.177-1.444-.076-.127-.278-.203-.582-.355z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Solveria Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
