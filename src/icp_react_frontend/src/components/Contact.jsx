import './contact.scss';

const Contact = () => {
  return (
    <header className="header">
      <div className="contact-list">
        <a href="https://github.com/yourusername" target="_blank" className="contact-item">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="contact-item">
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" className="contact-item">
          Email
        </a>
      </div>
    </header>
  )
}

export default Contact;
