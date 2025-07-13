import React from 'react';
import { useNavigate } from 'react-router-dom';

// ProjectCard Component - Reusable for each project
// Props:
// - title: Project name
// - description: Brief description of the project
// - technologies: Array of technologies used
// - githubLink: Link to GitHub repository
// - liveLink: Link to live demo (optional)
// - image: Project screenshot (optional)
const ProjectCard = ({ project }) => {
  const { id, title, description, technologies, githubLink, images } = project;
  const thumbnail = images && images[0];
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(`/project/${id}`)} tabIndex={0} role="button" aria-label={title + ' Details'}>
      {thumbnail && <img src={thumbnail} alt={title + ' preview'} className="project-thumb" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '0.7em' }} />}
      <div className="project-title">{title}</div>
      <div className="project-desc">{description}</div>
      <div className="project-tech">{technologies.join(', ')}</div>
      <a className="project-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default ProjectCard; 