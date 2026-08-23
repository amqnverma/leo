import './App.css';
import { LeoIcon } from './icons.jsx';
import { handleNavClick, navigateToSection } from './navigate.js';

function Footer() {
  return (
    <footer className="footer-expanded">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo"><LeoIcon /> leo</h3>
          <p className="footer-tagline">Your Entire Productivity Stack.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>READ</h4>
            <a href="/#updates" onClick={(e) => navigateToSection(e, 'updates')}>Blog</a>
            <a href="/setup" className="text-blue" onClick={(e) => handleNavClick(e, '/setup')}>Setup</a>
          </div>

          <div className="footer-col">
            <h4>FIND US</h4>
            <a href="https://www.instagram.com/amqnverma" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/prozpekt_7" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/in/aman-verma-12aa851a4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.reddit.com/user/aryanvikash/" target="_blank" rel="noopener noreferrer">Reddit</a>
            <a href="https://chat.whatsapp.com/IKwJSfDplxoAm2OtIV9HRh" target="_blank" rel="noopener noreferrer" className="text-strong">GTM Community</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-enterprise">Enterprise and AI labs: <a href="#leodatalabs" className="text-blue">LeoDataLabs -&gt;</a></p>
        <div className="footer-legal">
          <span>© 2026 Leo DataLabs</span>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
