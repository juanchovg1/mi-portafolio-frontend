import React from 'react';
import '../styles/components/ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Breve descripción del proyecto 1. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto1.png",
      gridClass: "project-small"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Breve descripción del proyecto 2. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto2.png",
      gridClass: "project-large"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Breve descripción del proyecto 3. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto3.png",
      gridClass: "project-large"
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Breve descripción del proyecto 4. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto4.png",
      gridClass: "project-small"
    },
    {
      id: 5,
      title: "Proyecto 5",
      description: "Breve descripción del proyecto 5. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto5.png",
      gridClass: "project-large"
    },
    {
      id: 6,
      title: "Proyecto 6",
      description: "Breve descripción del proyecto 6. Esta es una descripción corta que no debe exceder dos líneas.",
      image: "public/images/projects/proyecto6.png",
      gridClass: "project-small"
    }
  ];

  return (
    <section className="projects-section">
      <div className="section-title">
        <h2>Mis Proyectos</h2>
        <span className="section-subtitle">Trabajos Destacados</span>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.gridClass}`}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 