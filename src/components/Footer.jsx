import React from 'react';
import { USERNAME } from '../github.js';

export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">
          {profile.name || USERNAME} &middot; {year}
        </p>
        <p className="footer-tagline">
          Crafted with React, glassmorphism, and a little bit of magic.
        </p>
        <div className="footer-links">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a href={`mailto:${USERNAME}@users.noreply.github.com`} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
