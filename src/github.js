export const USERNAME = 'gokulblee-code';

const GITHUB_API = 'https://api.github.com';

export const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#663399',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Jupyter: '#DA5B0B',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  'C++': '#f34b7d',
};

export function languageColor(language) {
  return LANGUAGE_COLORS[language] || '#8b949e';
}

export async function fetchProfile() {
  const res = await fetch(`${GITHUB_API}/users/${USERNAME}`);
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  return res.json();
}

export async function fetchRepos() {
  const res = await fetch(
    `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=100`
  );
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  return res.json();
}
