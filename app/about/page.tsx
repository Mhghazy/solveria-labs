import './page.css';

export default function AboutPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1 className="page-title">About <span className="text-gradient">Solveria Labs</span></h1>
        <p className="page-subtitle">We are architects of the digital frontier.</p>
      </div>

      <div className="about-content">
        <div className="about-card glass">
          <h2>Our Mission</h2>
          <p>
            At Solveria Labs, our mission is to empower businesses by building state-of-the-art digital systems. We believe that technology should be a multiplier, not a bottleneck. Our freelance collective is dedicated to bridging the gap between complex engineering and flawless user experiences.
          </p>
        </div>

        <div className="about-card glass">
          <h2>Who We Are</h2>
          <p>
            We are a highly specialized freelance team of engineers, designers, and systems architects. Born from a shared passion for high-performance computing and elegant design, Solveria Labs tackles everything from immersive landing pages to robust backend databases and cutting-edge AI integrations.
          </p>
        </div>

        <div className="about-card glass">
          <h2>Our Approach</h2>
          <p>
            Precision. Performance. Polish. We don't just write code; we engineer solutions. By utilizing the latest tech stacks and adhering to rigorous standards, we ensure that every platform we construct is secure, scalable, and visually breathtaking.
          </p>
        </div>
      </div>
    </main>
  );
}
