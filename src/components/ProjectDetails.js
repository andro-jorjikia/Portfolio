import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

export default function ProjectDetails({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return <div style={{textAlign: 'center', marginTop: '4em'}}>Project not found.</div>;

  return (
    <div className="project-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      <h1 className="project-details-title">{project.title}</h1>
      <div className="project-details-gallery">
        {project.images && project.images.map((img, i) => (
          <img key={i} src={img} alt={project.title + ' screenshot ' + (i+1)} className="project-details-img" />
        ))}
      </div>
      <div className="project-details-desc">{project.description}</div>
      <div className="project-details-tech">{project.technologies.join(', ')}</div>
      <a className="project-details-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
} 