import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import { fetchProfile, fetchRepos } from './github.js';

export default function App() {
  const [profile, setProfile] = useState({ login: 'gokulblee-code', name: 'Gokulblee', bio: '', avatar_url: '' });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const [profileData, reposData] = await Promise.all([fetchProfile(), fetchRepos()]);
      setProfile((prev) => ({ ...prev, ...profileData }));
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const repoCount = profile.public_repos;

  return (
    <div className="app">
      <div className="bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="orb orb-4" />
      </div>

      <main>
        <Hero profile={profile} />
        <Stats profile={profile} repoCount={repoCount} totalStars={totalStars} />
        <Projects repos={repos} error={error} loading={loading} onRetry={load} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
