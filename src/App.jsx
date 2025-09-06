import './styles/App.css';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import ProjectDetails from './components/ProjectDetails';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

// Skills
const skillLevels = {
  'Virtual Asisstance': 0,
 ' Email management': 0,
  'Calendar management': 0,
  'Writing': 0,
  'Data entry': 0,
  'Research': 0,
};

//projects
const projects = [
  {
    id: 'writing',
    title: "project ",
    description: "",
    technologies: [""],
    githubLink: "",
    images: [
      "/images/faqbot-home.png",
      "/images/faqbot-chat.png"
    ]
  },
  {
    id: 'writing',
    title: "project ",
    description: "",
    technologies: [""],
    githubLink: "",
    images: [
      "/images/faqbot-home.png",
      "/images/faqbot-chat.png"
    ]
  },
  {
    id: 'writing',
    title: "project ",
    description: "",
    technologies: [""],
    githubLink: "",
    images: [
      "/images/faqbot-home.png",
      "/images/faqbot-chat.png"
    ]
  },
  {
    id: 'writing',
    title: "project ",
    description: "",
    technologies: [""],
    githubLink: "",
    images: [
      "/images/faqbot-home.png",
      "/images/faqbot-chat.png"
    ]
  },
  {
    id: 'writing',
    title: "project ",
    description: "",
    technologies: [""],
    githubLink: "",
    images: [
      "/images/faqbot-home.png",
      "/images/faqbot-chat.png"
    ]
  },
];

// Links for skill reference
const skillLinks = {
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'React': 'https://react.dev/',
  'Node.js': 'https://nodejs.org/en/docs/',
  'Rasa': 'https://rasa.com/docs/',
  'Dialogflow': 'https://cloud.google.com/dialogflow/docs',
  'Telegram Bots': 'https://core.telegram.org/bots/api',
};

// Skill chip component
function SkillBar({ skill, link }) {
  return (
    <a
      className="skill-chip"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      aria-label={skill + ' documentation'}
    >
      {skill}
    </a>
  );
}

// Home / Portfolio page
function Home({ projects }) {
  const useAnimateOnScroll = (className = 'section-in') => {
    const ref = useRef();
    useEffect(() => {
      const node = ref.current;
      if (!node) return;
      const onScroll = () => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          node.classList.add(className);
        }
      };
      window.addEventListener('scroll', onScroll);
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }, [className]);
    return ref;
  };

  const aboutRef = useAnimateOnScroll();
  const skillsRef = useAnimateOnScroll();
  const projectsRef = useAnimateOnScroll();
  const contactRef = useAnimateOnScroll();
  const funfactsRef = useAnimateOnScroll();

  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Anna Papalashvili</h1>
          <p className="hero-desc">
            Building powerful and intelligent chatbots that automate tasks, support users, and drive engagement.  
            Self-taught developer turning innovative ideas into functional products — from Georgia to the world.  
            <br /> <strong>Based in Tbilisi, Georgia.</strong>
          </p>
          <a href="#contact" className="hero-cta">Contact Me</a>
        </div>
      </section>

      <div className="section-separator" />

      {/* About Section */}
      <section className="open-section about-section" ref={aboutRef} id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">
          anna bios here
        </p>
        <ul className="about-list">
          <li>🤖 Chatbot & Frontend Developer</li>
          <li>🌍 Tbilisi, Georgia</li>
          <li>💡 Web, Mobile & Intelligent Chat Solutions</li>
        </ul>
      </section>

      <div className="section-separator" />

      {/* Skills Section */}
      <section className="open-section skills-section" ref={skillsRef} id="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.keys(skillLevels).map(skill => (
            <SkillBar key={skill} skill={skill} link={skillLinks[skill]} />
          ))}
        </div>
      </section>

      <div className="section-separator" />

      {/* Fun Facts Section */}
      <section className="open-section funfacts-section" ref={funfactsRef} id="funfacts">
        <h2 className="section-title">Fun Facts</h2>
        <ul style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', color: '#334155', fontSize: '1.1rem', listStyle: 'none', padding: 0, marginBottom: '2em'}}>
          <li>🌍 <b>Trilingual:</b> Fluent in Georgian, English, and Russian.</li>
          <li>🎶 <b>Music Enthusiast:</b> I enjoy producing techno and electronic music.</li>
          <li>☕ <b>Espresso Lover:</b> I make a strong, smooth cup of espresso to fuel coding sessions.</li>
          <li>🕹️ <b>Tech Hobbyist:</b> Experiment with AI, automation, and fun small projects in free time.</li>
        </ul> 
      </section>

      <div className="section-separator" />

      {/* Projects Section */}
      <section className="open-section projects-section" ref={projectsRef} id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <div className="section-separator" />

      {/* Contact Section */}
      <section className="open-section contact-section" ref={contactRef} id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-details">
          <a href="mailto:androjorjikia@yahoo.com" className="contact-link">androjorjikia@yahoo.com</a>
          <span className="contact-location">Tbilisi, Georgia</span>
        </div>
        <div className="hero-socials" style={{ marginBottom: 24 }}>
          <a href="https://github.com/andro-jorjikia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://www.facebook.com/andro.jorjikia.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.linkedin.com/in/andro-jorjikia-a977222b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div> 
          <h1 style={{ textAlign: 'center', color: '#ff', fontSize: '1.2em' }}>
            Demo videos of my chatbot projects are available on my LinkedIn profile
          </h1>
        </div>
        <div className="signature-animated">anna papalashvili</div>
      </section>
    </>
  );
}

// Project Card
function ProjectCard({ project }) {
  const { id, title, description, technologies, githubLink, images } = project;
  const thumbnail = images && images[0];
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(`/project/${id}`)} tabIndex={0} role="button" aria-label={title + ' Details'}>
      {thumbnail && <img src={thumbnail} alt={title + ' preview'} className="project-thumb" />}
      <div className="project-title">{title}</div>
      <div className="project-desc">{description}</div>
      <div className="project-tech">{technologies.join(', ')}</div>
      <a className="project-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
