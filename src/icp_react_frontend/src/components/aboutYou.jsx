import { useState } from 'react';
import './about.scss'

const AboutYou = () => {
  const [aboutText, setAboutText] = useState("Short desc about you")

  return (
    <section className="about">
      <h2>About You</h2>
      <div className="about-content">
        <p>{ aboutText }</p>
      </div>
    </section>
  )
}

export default AboutYou;
