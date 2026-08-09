import React from 'react';
import { useCountUp, useReveal } from '../hooks.js';

function StatItem({ label, value, started, delay }) {
  const { ref, visible } = useReveal();
  const count = useCountUp(value, visible && started);

  return (
    <div
      className={`stat-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={ref}
    >
      <span className="stat-value">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats({ profile, repoCount, totalStars }) {
  const started = true;
  return (
    <section className="stats" aria-label="GitHub statistics">
      <div className="stats-grid">
        <StatItem label="Repositories" value={repoCount} started={started} delay={0} />
        <StatItem label="Total stars" value={totalStars} started={started} delay={80} />
        <StatItem label="Followers" value={profile.followers} started={started} delay={160} />
        <StatItem label="Following" value={profile.following} started={started} delay={240} />
      </div>
    </section>
  );
}
