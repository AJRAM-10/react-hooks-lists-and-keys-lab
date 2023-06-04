import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techSpan = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techSpan}</div>
    </div>
  );
}

export default ProjectItem;
