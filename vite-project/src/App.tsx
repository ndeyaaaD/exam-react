import React from 'react';
import './App.css';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Barre de Navigation */}
      <nav className="navbar">
        <div className="logo-small">
          LE <br /> DAKAR LAUNCH
        </div>
        <div className="nav-links">
          <a href="#accueil">ACCUEIL</a>
          <a href="#carte">CARTE</a>
          <a href="#contact">CONTACT</a>
        </div>
        <button className="btn-nav-reserve">RÉSERVER</button>
      </nav>

      {/* Section Principale (Hero) */}
      <header id="accueil" className="hero-content">
        <p className="subtitle">DAKAR · DEPUIS 1987</p>

        <h1 className="main-title">
          Le <br />
          <span className="brand-name">DAKAR LAUNCH</span>
        </h1>

        <p className="description">
          Une cuisine sénégalaise d'exception, entre tradition et <br />
          modernité, au cœur de Dakar.
        </p>

        <div className="cta-group">
          <button className="btn-primary">RÉSERVER UNE TABLE</button>
          <button className="btn-secondary">VOIR LA CARTE</button>
        </div>
      </header>

      {/* Section Contact ajoutée en bas */}
      <footer id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="contact-item">
            <h3>NOM</h3>
            <p>LE GASTON DAKAR</p>
          </div>
          <div className="contact-item">
            <h3>TÉLÉPHONE</h3>
            <p><a href="tel:+221338569875">+221 33 876 07 07</a></p>
          </div>
          <div className="contact-item">
            <h3>ADRESSE</h3>
            <p>Plateau,Dakar</p>
          </div>
        </div>
      </footer>

      {/* Décoration : Ligne verticale en bas */}
      <div className="scroll-indicator"></div>
    </div>
  );
};

export default App;
