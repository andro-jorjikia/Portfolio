import './styles/App.css';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import ProjectDetails from './components/ProjectDetails';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const skillLevels = {
  'JavaScript': 0,
  'React': 0,
  'React-Native': 0,
  'Git': 0,
};

const projects = [
  {
    id: 'recipe-app',
    title: "Recipe App",
    description: "A full-stack recipe application with backend, API and mobile frontend.",
    technologies: ["React-Native", "JavaScript", "CSS3", "JSX", "Expo", "Node.js", "Express", "Neon DB", "mealApi"],
    githubLink: "https://github.com/andro-jorjikia/Recipe-app",
    images: [
      "/images/HomeIMG.png",
      "/images/SignUp.png",
      "/images/signinIMG.png",
      "/images/LogoutIMG.png",
      "/images/FavoritesIMG.png",
      "/images/IngredientsIMG.png",
      "/images/RecipeDetails.png",
      "/images/SearchIMG.png"
    ]
  },
  {
    id: '3D cube',
    title: "3D Cube",
    description: "3D cube with 3D animation and 3D rotation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/andro-jorjikia/3D-Cube",
    images: ["/images/cube.png"]
  },
  {
    id: 'Todo list',
    title: "Todo List React-native",
    description: "A clean and functional todo list mobile app built with React Native and Expo.", 
    technologies: ["React Native", "JavaScript", "SVG", "Animated API", "Expo"],
    githubLink: "https://github.com/andro-jorjikia/TodoList-react-native",
    images: [
      "/images/done-screenligjt.png",
      "/images/donescreen.png",
      "/images/enterthetaskerror.png",
      "/images/inprogress.png",
      "/images/main-page.png",
      "/images/todo-task-ligfht.png"
    ]
  },
];

const skillLinks = {
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'React': 'https://react.dev/',
  'React-Native': 'https://reactnative.dev/docs/getting-started',
  'Git': 'https://git-scm.com/doc',
};

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
          <h1 className="hero-title">Andro Jorjikia</h1>
          <p className="hero-desc">Crafting sleek, modern interfaces for the web and mobile.
Self-taught developer blending frontend creativity with backend logic.
Let's build something impactful — from Georgia to the world.<br /> <strong>Based in Tbilisi, Georgia.</strong></p>
          <a href="#contact" className="hero-cta">Contact Me</a>
        </div>
      </section>

      <div className="section-separator" />

      {/* About Section */}
      <section className="open-section about-section" ref={aboutRef} id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">
          Hey, I'm a frontend developer from Tbilisi, Georgia. I got into coding by teaching myself and building real projects — no degree, just a lot of curiosity and late nights.

          I enjoy creating clean, responsive websites and web apps that look good and work well. Lately, I've been working with tools like React, JavaScript, React Native and MySQL, and I'm always learning something new.

          Whether it's web, mobile, or UI/UX — I love turning ideas into real products people can use.
        </p>
        <ul className="about-list">
          <li>👨‍💻 Frontend Developer</li>
          <li>🌍 Tbilisi, Georgia</li>
          <li>💡 Web, Mobile, UI/UX</li>
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
        <ul style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', color: '#334155', fontSize: '1.1rem', listStyle: 'none', padding: 0, marginBottom: '2em' }}>
          <li>🌍 <b>Multilingual:</b> I speak three languages: Georgian, English, and Russian.</li>
          <li>🏃‍♂️ <b>Active Lifestyle:</b>  </li>
          <li>📚 <b>Sci-Fi Fan:</b> I'm a big fan of sci-fi books and movies.</li>
          <li>☕ <b>Espresso Master:</b> I make a mean cup of espresso—strong, smooth, and no nonsense.</li>
          <li>🕺 <b>Confident Moves:</b> I can dance when the mood is right—and I don't mean just at weddings.</li>
        </ul> 
      </section>

      <div className="section-separator" />

      {/* Projects Section */}
      <section className="open-section projects-section" ref={projectsRef} id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
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
          <h1 style={{ textAlign: 'center', color: '#2424242', fontSize: '1.2em' }}>
            The videos of the projects are available on my linkedin profile
          </h1>
        </div>
       
        <div className="signature-animated">Andro Jorjikia</div>
      </section>
    </>
  );
}

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
