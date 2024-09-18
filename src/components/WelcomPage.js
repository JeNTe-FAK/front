import React from "react";
import "../styles/main.css";
import ImageGallery from "./ImageGallery";
import { Instagram, Linkedin, Users } from 'lucide-react';

// SocialMediaLink Component
const SocialMediaLink = ({ icon: Icon, name }) => (
  <figure className="social-link">
    <Icon size={32} className="icon" />
    <figcaption className="social-name">{name}</figcaption>
  </figure>
);

const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <article className="content">
        {/* Left side */}
        <aside className="contact-info">
          <ImageGallery imageName="mainLogoWithName" />
          <div className="dots">
            {[...Array(11)].map((_, i) => (
              <span
                key={i}
                className={`dot ${i % 2 === 0 ? 'dot-pink' : 'dot-turquoise'}`}
              ></span>
            ))}
          </div>
          <p className="contact-text">
            Er du en bedrift og vil samarbeide med oss?
          </p>
          <p className="contact-text">
            Ta kontakt på{' '}
            <a href="mailto:kommunikasjon@jentefak.no" className="email-link">
              kommunikasjon@jentefak.no
            </a>
          </p>
        </aside>

        {/* Right side */}
        <aside className="social-section">
          <h1 className="welcome-title">Velkommen til</h1>
          <ImageGallery imageName="nameLogoWhite" />
          <p className="text">Vi jobber for tiden med nettsiden vår.</p>
          <p className="text">
            I mellomtiden kan du ta kontakt eller følge oss på følgende
            plattformer:
          </p>

          {/* Social Media Links */}
          <section className="social-links">
            <SocialMediaLink icon={Instagram} name="Instagram" />
            <SocialMediaLink icon={Linkedin} name="LinkedIn" />
            <SocialMediaLink icon={Users} name="Bli medlem i Orbi" />
          </section>
        </aside>
      </article>
    </section>
  );
};

export default WelcomePage;
