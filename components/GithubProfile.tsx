'use client';

import { Github, Star, ExternalLink, Code, Users, BookOpen } from 'lucide-react';
import { useGithubData } from '@/hooks/useGithubData';
import { motion } from 'framer-motion';

interface GithubProfileProps {
  username: string;
}

export const GithubProfile = ({ username }: GithubProfileProps) => {
  const { user, repos, languages, loading, error } = useGithubData(username);

  if (loading) {
    return (
      <div className="p-6 rounded-lg bg-white/5 border border-white/10">
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="h-4 bg-white/10 rounded w-1/3"></div>
          <div className="h-4 bg-white/10 rounded w-2/3"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300">
        Error loading GitHub data: {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 rounded-lg bg-white/5 border border-white/10">
        No GitHub profile data found
      </div>
    );
  }

  // Get top 5 languages
  const topLanguages = Object.entries(languages).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-start gap-4">
        <img 
          src={user.avatar_url} 
          alt={user.login} 
          className="w-16 h-16 rounded-full border-2 border-white/10"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Github className="w-5 h-5" />
            {user.name || user.login}
          </h3>
          <p className="text-muted-foreground text-sm">@{user.login}</p>
          {user.bio && <p className="mt-2 text-sm">{user.bio}</p>}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">{user.public_repos}</div>
          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <BookOpen className="w-3 h-3" /> Repos
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">{user.followers}</div>
          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Users className="w-3 h-3" /> Followers
          </div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
          <div className="text-lg font-bold">{user.following}</div>
          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Users className="w-3 h-3" /> Following
          </div>
        </div>
      </div>

      {/* Location and Blog */}
      {(user.location || user.blog) && (
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {user.location && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {user.location}
            </div>
          )}
          {user.blog && (
            <a 
              href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
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
      )}

      {/* Top Languages */}
      {topLanguages.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4" /> Top Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {topLanguages.map(([language, count]) => (
              <span 
                key={language} 
                className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
              >
                {language} ({count})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recent Repositories */}
      <div>
        <h4 className="font-semibold mb-2">Recent Projects</h4>
        <div className="space-y-3">
          {repos.slice(0, 3).map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="flex justify-between items-start">
                <h5 className="font-medium">{repo.name}</h5>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {repo.description && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{repo.description}</p>
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
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
              </div>
            </motion.a>
          ))}
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
    'JSON': '#85e8e8',
    'YAML': '#cb171e',
  };
  
  return colors[language] || '#858585'; // gris por defecto
};