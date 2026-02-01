'use client';

import { Code } from 'lucide-react';
import { useGithubData } from '@/hooks/useGithubData';

interface GithubLanguagesProps {
  username: string;
}

export const GithubLanguages = ({ username }: GithubLanguagesProps) => {
  const { languages, loading, error } = useGithubData(username);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-white/10 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-white/10 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-white/10 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-300 text-sm">
        Error loading languages: {error}
      </div>
    );
  }

  // Get top 6 languages
  const topLanguages = Object.entries(languages).slice(0, 6);

  return (
    <div className="space-y-3">
      {topLanguages.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {topLanguages.map(([language, count]) => (
            <div 
              key={language} 
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 group hover:bg-white/10 transition-colors"
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: getLanguageColor(language) }}
              ></div>
              <span className="text-sm font-medium">{language}</span>
              <span className="text-xs text-muted-foreground">({count})</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No language data available</p>
      )}
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