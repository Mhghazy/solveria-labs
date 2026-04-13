import './page.css';
import { PenTool, Code2, Globe, Database, Server, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="page-container services-page">
      <div className="page-header">
        <h1 className="page-title">Our <span className="text-gradient">Services</span></h1>
        <p className="page-subtitle">Comprehensive digital solutions designed to elevate your brand from concept to deployment.</p>
      </div>

      {/* What We Offer Section */}
      <section className="services-section">
        <div className="section-heading">
          <h2>What We Offer</h2>
          <div className="heading-line"></div>
        </div>

        <div className="offerings-grid">
          {/* UI/UX for the system */}
          <div className="offering-card glass">
            <div className="offering-icon">
              <PenTool size={32} />
            </div>
            <h3>UI/UX for Systems</h3>
            <p>
              We design intuitive, data-driven user interfaces and seamless user experiences specifically tailored for complex digital systems. Our design architecture ensures that heavy technical platforms remain remarkably easy to navigate without sacrificing power.
            </p>
          </div>

          {/* Web Development */}
          <div className="offering-card glass">
            <div className="offering-icon">
              <Code2 size={32} />
            </div>
            <h3>Web Development</h3>
            <p>
              From landing pages to sprawling enterprise applications, we build fast, accessible, and responsive web properties. We combine flawless frontend execution with robust backend logic to deliver digital products that scale effortlessly.
            </p>
          </div>
          
           {/* Additional structural filler for balance */}
          <div className="offering-card glass">
            <div className="offering-icon">
              <Database size={32} />
            </div>
            <h3>Database & Infrastructure</h3>
            <p>
              Underpinning our web and system capabilities is a foundation of robust infrastructure and database design, securing your data securely and efficiently to ensure zero downtime and instant availability.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Used Section */}
      <section className="services-section tech-stack-section">
        <div className="section-heading text-center">
          <h2>Tech Stack Used</h2>
          <p className="stack-subtitle">We utilize industry-leading technologies to guarantee performance.</p>
        </div>

        <div className="stack-grid">
          <div className="stack-card glass">
            <div className="stack-icon nextjs-icon">
              <Server size={40} />
            </div>
            <h3>Next.js + Node.js</h3>
            <p>Our primary stack for massive-scale applications requiring Server-Side Rendering (SSR), lightning-fast APIs, and unparalleled React performance.</p>
          </div>

          <div className="stack-card glass">
            <div className="stack-icon python-icon">
              <Globe size={40} />
            </div>
            <h3>Python</h3>
            <p>Deployed for rigorous backend logic, deep data analytics, automation processes, and advanced Artificial Intelligence system integrations.</p>
          </div>

          <div className="stack-card glass">
            <div className="stack-icon wp-icon">
              <Smartphone size={40} />
            </div>
            <h3>WordPress</h3>
            <p>The perfect, customizable Content Management System (CMS) solution for clients needing an easy-to-use publishing platform with robust SEO capabilities.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
