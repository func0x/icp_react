import { useState } from "react";

import './projects.scss';

const Projects = () => {
  const [ projects, setProjects] = useState([
           { title: 'Project One', description: 'Description of project one.' },
           { title: 'Project Two', description: 'Description of project two.' },
           { title: 'Project Three', description: 'Description of project three.' }
         ])

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{ project.title }</h3>
              <p>{ project.description }</p>
            </div>
          ))}
      </div>
    </section>

  )
}

export default Projects;
