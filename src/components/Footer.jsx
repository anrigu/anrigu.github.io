import React from 'react';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © 2024 {profile.name} • 
          <a href={`mailto:${profile.email}`}> {profile.email}</a> • 
          {profile.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

