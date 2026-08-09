import React from 'react';
import { useTypewriter } from '../hooks.js';

const ROLES = [
  'Python & Django Developer',
  'Building web apps',
  'Crafting AI tools',
  'Open-source enthusiast',
];

export default function Hero({ profile }) {
  const typewriter = useTypewriter(ROLES);

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-avatar-wrap">
          <img
            className="hero-avatar"
            src={profile.avatar_url}
            alt={profile.name}
            loading="eager"
          />
          <span className="hero-status" title="Available for projects" />
        </div>

        <p className="hero-greeting">Hello, I am</p>
        <h1 className="hero-name">{profile.name}</h1>

        <p className="hero-role">
          <span className="hero-type">{typewriter}</span>
          <span className="hero-caret" />
        </p>

        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
          </a>
          <a
            className="btn btn-ghost"
            href={`https://github.com/${profile.login}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#projects" aria-label="Scroll to projects">
        <span />
      </a>
    </section>
  );
}
