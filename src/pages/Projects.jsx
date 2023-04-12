import React from "react";
import ProjectsCard from "../components/Projects Card";
import projectList from "../data/projects.json";

function Projects() {
  return (
    <section>
      <h1 className="header">Projects</h1>
      <div className="container">
        {projectList.map((p) => (
          <ProjectsCard
            key={p.id}
            title={p.title}
            tools={p.tools}
            description={p.description}
            live={p.live}
            github={p.github}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
