'use client';

import { Github, Mail, ExternalLink } from 'lucide-react';

interface GithubProfileProps {
  username: string;
}

export const GithubProfile = ({ username }: GithubProfileProps) => {
  // Datos fijos para mostrar
  const profileData = {
    name: "SnoW-099",
    displayName: "ryzee",
    login: "SnoW-099",
    bio: "Junior Dev | Learning every day.",
    location: "Spain",
    website: "https://github.com/SnoW-099"
  };

  // Lenguajes fijos
  const languages = [
    { name: "Python", percentage: 60 },
    { name: "HTML", percentage: 10 },
    { name: "CSS", percentage: 10 }
  ];

  // Proyectos recientes fijos
  const repos = [
    {
      id: 1,
      name: "Portfolio-Snow",
      description: "My personal portfolio built with TypeScript",
      language: "TypeScript",
      stars: 0
    },
    {
      id: 2,
      name: "Rez",
      description: "Rez is a bot you can use in your Discord server for a lot of things like security, fun functions, etc.",
      language: "Python",
      stars: 0
    }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white/10 flex items-center justify-center">
          <Github className="w-8 h-8 text-white/80" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{profileData.displayName}</h3>
          <p className="text-muted-foreground text-sm">@{profileData.login}</p>
          {profileData.bio && <p className="mt-2 text-sm">{profileData.bio}</p>}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">3</div>
          <div className="text-xs text-muted-foreground">Repos</div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">1</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">2</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </div>
      </div>

      {/* Location and Website */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        {profileData.location && (
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {profileData.location}
          </div>
        )}
        {profileData.website && (
          <a
            href={profileData.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Website
          </a>
        )}
      </div>

      {/* Top Languages */}
      <div>
        <h4 className="font-semibold mb-2">Top Languages</h4>
        <div className="space-y-3">
          {languages.map((lang) => (
            <div key={lang.name} className="group">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-foreground/80 font-medium">{lang.name}</span>
                <span className="text-muted-foreground text-xs">{lang.percentage}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-blue-400/50 transition-all duration-1000 ease-out group-hover:bg-blue-400/80"
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Repositories */}
      <div>
        <h4 className="font-semibold mb-2">Recent Projects</h4>
        <div className="space-y-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={`https://github.com/${username}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h5 className="font-medium">{repo.name}</h5>
                <ExternalLink className="w-4 h-4 opacity-50" />
              </div>
              {repo.description && (
                <p className="text-sm text-muted-foreground mt-1">{repo.description}</p>
              )}
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    ></div>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  {repo.stars}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="pt-4 border-t border-white/10">
        <h4 className="font-semibold mb-3">Contact</h4>
        <div className="space-y-2">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub Profile</span>
          </a>
          <a
            href="mailto:ryze0950@gmail.com"
            className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">Email: ryze0950@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Función para obtener colores de lenguajes
const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572a5',
    'Java': '#b07219',
    'Go': '#00add8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C': '#555555',
    'C#': '#178600',
    'PHP': '#4f5d95',
    'Ruby': '#701516',
    'Swift': '#ffac45',
    'Kotlin': '#f18e33',
    'Scala': '#c22d40',
    'R': '#198ce7',
    'Shell': '#89e051',
    'PowerShell': '#002456',
    'Objective-C': '#438eff',
    'Dart': '#00b4ab',
    'Lua': '#000080',
    'Vue': '#41b883',
    'Svelte': '#ff3e00',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'SCSS': '#c6538c',
    'SQL': '#sql',
    'Markdown': '#083fa1',
    'Jupyter Notebook': '#da5b0b',
    'Dockerfile': '#384d54',
    'JSON': '#858585',
    'YAML': '#cb171e',
  };

  return colors[language] || '#858585'; // gris por defecto
};