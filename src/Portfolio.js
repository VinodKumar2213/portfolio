import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Portfolio = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Intersection Observer hooks for animations
  const [homeRef, homeInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      const heroBackground = document.querySelector('.hero-background');

      if (heroContent && heroBackground) {
        heroContent.style.transform = `translateY(${scrollY * 0.4}px)`;
        heroBackground.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <span className="logo-text">Jane.Dev</span>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={() => { setActiveNav('home'); setIsMenuOpen(false); }}>Home</a></li>
          <li><a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={() => { setActiveNav('about'); setIsMenuOpen(false); }}>About</a></li>
          <li><a href="#skills" className={activeNav === 'skills' ? 'active' : ''} onClick={() => { setActiveNav('skills'); setIsMenuOpen(false); }}>Skills</a></li>
          <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={() => { setActiveNav('projects'); setIsMenuOpen(false); }}>Projects</a></li>
          <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={() => { setActiveNav('contact'); setIsMenuOpen(false); }}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" ref={homeRef}>
        <div className="hero-background"></div>
        <div className={`hero-content ${homeInView ? 'animate-in' : ''}`}>
          <h1>Jane Doe</h1>
          <h2>Full Stack Developer</h2>
          <p>Crafting digital experiences that make a difference</p>
          <div className="cta-buttons">
            <a href="#contact" className="primary-btn">Hire Me</a>
            <a href="#projects" className="secondary-btn">View Work</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className={`about-content ${aboutInView ? 'animate-in' : ''}`}>
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://fortune.com/img-assets/wp-content/uploads/2023/04/GettyImages-1466966360-1-e1682200619577.jpg?w=1440&q=75" alt="Jane Doe" />
              <div className="image-blob"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Hello, I'm Jane</h3>
            <p>I'm a passionate Full Stack Developer with expertise in modern web technologies. I specialize in creating responsive, user-friendly applications that solve real-world problems.</p>
            <p>With 5+ years of experience in the tech industry, I've worked with startups and enterprise clients to deliver innovative solutions that drive business growth.</p>

            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">Experience:</span>
                <span className="info-value">5+ Years</span>
              </div>
              <div className="info-item">
                <span className="info-label">Speciality:</span>
                <span className="info-value">Full Stack Development</span>
              </div>
              <div className="info-item">
                <span className="info-label">Address:</span>
                <span className="info-value">San Francisco, CA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">jane@example.com</span>
              </div>
            </div>

            <a href="/resume.pdf" className="download-btn">Download CV</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" ref={skillsRef}>
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className={`skills-content ${skillsInView ? 'animate-in' : ''}`}>
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-react"></i>
                </div>
                <h4>React</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-js"></i>
                </div>
                <h4>JavaScript</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-css"></i>
                </div>
                <h4>CSS</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-node"></i>
                </div>
                <h4>Node.js</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                <i className="fas fa-server"></i>
                </div>
                <h4>Express</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                <i className="fas fa-database"></i> 
                </div>
                <h4>MongoDB</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Others</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-github"></i>
                </div>
                <h4>Git/GitHub</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="icon-aws"></i>
                </div>
                <h4>AWS</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="icon-figma"></i>
                </div>
                <h4>Figma</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" ref={projectsRef}>
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className={`projects-content ${projectsInView ? 'animate-in' : ''}`}>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="E-commerce Platform" />
                <div className="project-overlay">
                  <a href="https://ecommerce-example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                  <a href="https://github.com/yourusername/ecommerce-platform" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3>E-commerce Platform</h3>
                <p>A full-featured online store with payment integration, user accounts, and inventory management.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="Task Management App" />
                <div className="project-overlay">
                  <a href="https://taskmanager-example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                  <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Task Management App</h3>
                <p>A real-time collaborative task management application with drag-and-drop functionality.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Socket.io</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="Weather Dashboard" />
                <div className="project-overlay">
                  <a href="https://weather-example.com" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                  <a href="https://github.com/yourusername/weather-dashboard" target="_blank" rel="noopener noreferrer" className="project-link">Source Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Weather Dashboard</h3>
                <p>An interactive weather application with location-based forecasts and animated visualizations.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Chart.js</span>
                  <span className="tech-tag">Weather API</span>
                  <span className="tech-tag">CSS Animations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Contact Section */}
<section id="contact" className="contact-section" ref={contactRef}>
  <div className="section-header">
    <h2>Get In Touch</h2>
    <div className="underline"></div>
  </div>
  <div className={`contact-content ${contactInView ? 'animate-in' : ''}`}>
    <div className="contact-info">
      <h3>Let's Talk About Your Project</h3>
      <p>Feel free to reach out if you're looking for a developer, have questions, or just want to connect.</p>

      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="icon-email"></i>
          </div>
          <div className="contact-text">
            <h4>Email</h4>
            <p>jane@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="icon-phone"></i>
          </div>
          <div className="contact-text">
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="icon-location"></i>
          </div>
          <div className="contact-text">
            <h4>Location</h4>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="#" className="social-link"><i className="icon-github"></i></a>
        <a href="#" className="social-link"><i className="icon-linkedin"></i></a>
        <a href="#" className="social-link"><i className="icon-twitter"></i></a>
        <a href="#" className="social-link"><i className="icon-instagram"></i></a>
      </div>
    </div>

    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <input type="text" id="name" className="form-input" placeholder=" " required />
            <label htmlFor="name" className="form-label">Name</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" className="form-input" placeholder=" " required />
            <label htmlFor="email" className="form-label">Email</label>
          </div>
        </div>

        <div className="form-group">
          <input type="text" id="subject" className="form-input" placeholder=" " required />
          <label htmlFor="subject" className="form-label">Subject</label>
        </div>

        <div className="form-group">
          <textarea id="message" className="form-input" placeholder=" " rows="5" required></textarea>
          <label htmlFor="message" className="form-label">Message</label>
        </div>

        <button type="submit" className="submit-btn">
          <span>Send Message</span>
          <i className="icon-send"></i>
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Jane.Dev</span>
          </div>
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Jane Doe. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
