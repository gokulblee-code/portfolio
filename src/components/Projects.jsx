import React from 'react';
import { languageColor, USERNAME } from '../github.js';
import { useReveal } from '../hooks.js';

function RepoCard({ repo, index }) {
  const { ref, visible } = useReveal();
  const lang = repo.language;
  const topics = (repo.topics || []).slice(0, 4);
  const icon = repo.fork ? 'repo-forked' : 'repo';

  return (
    <a
      className={`repo-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="repo-top">
        <svg
          className="repo-icon"
          viewBox="0 0 16 16"
          width="18"
          height="18"
          aria-hidden="true"
        >
          {icon === 'repo-forked' ? (
            <path
              fill="currentColor"
              d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
            />
          ) : (
            <path
              fill="currentColor"
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
            />
          )}
        </svg>
        <span className="repo-name">{repo.name}</span>
      </div>

      <p className="repo-desc">
        {repo.description || 'No description provided.'}
      </p>

      {topics.length > 0 && (
        <div className="repo-topics">
          {topics.map((topic) => (
            <span className="repo-topic" key={topic}>
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="repo-meta">
        {lang && (
          <span className="repo-lang">
            <span
              className="lang-dot"
              style={{ background: languageColor(lang) }}
            />
            {lang}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="repo-meta-item" title="Stars">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
              />
            </svg>
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="repo-meta-item" title="Forks">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                fill="currentColor"
                d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
              />
            </svg>
            {repo.forks_count}
          </span>
        )}
        <span className="repo-updated">
          Updated {new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
    </a>
  );
}

export default function Projects({ repos, error, loading, onRetry }) {
  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <p className="section-kicker">My work</p>
        <h2 className="section-title">Repositories</h2>
        <p className="section-sub">
          Live from my GitHub — visit{' '}
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{USERNAME}
          </a>{' '}
          for more.
        </p>
      </div>

      {loading && (
        <div className="state-card">
          <span className="spinner" />
          <p>Loading repositories from GitHub...</p>
        </div>
      )}

      {error && !loading && (
        <div className="state-card">
          <p>Could not load repositories from GitHub.</p>
          <button className="btn btn-ghost" onClick={onRetry}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="state-card">
          <p>No public repositories yet.</p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="repo-grid">
          {repos.map((repo, index) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
