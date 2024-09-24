import { useState } from "react";

import './skills.scss';

const Skills = () => {
  const [ skills, setSkills] = useState([
          "HTML",
          "CSS",
          "JavaScript",
          "Typescript",
          "Astro.js",
          "Vue.js",
          "Nuxt.js",
          "React",
          "Next",
        ])

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>

  )
}

export default Skills;
