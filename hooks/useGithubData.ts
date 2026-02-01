'use client';

import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

interface User {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string | null;
}

interface LanguageStats {
  [key: string]: number;
}

interface GithubData {
  user: User | null;
  repos: Repo[];
  languages: LanguageStats;
  loading: boolean;
  error: string | null;
}

export const useGithubData = (username: string) => {
  const [data, setData] = useState<GithubData>({
    user: null,
    repos: [],
    languages: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData: User = await userResponse.json();

        // Fetch user repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=10`
        );
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repos');
        }
        const reposData: Repo[] = await reposResponse.json();

        // Filter out forks and get top repos
        const originalRepos = reposData.filter(repo => !repo.fork);

        // Calculate language stats by fetching languages for each repo
        const languageStats: LanguageStats = {};
        for (const repo of originalRepos) {
          try {
            const repoLangResponse = await fetch(repo.languages_url);
            if (repoLangResponse.ok) {
              const repoLanguages: Record<string, number> = await repoLangResponse.json();

              // Sum up language bytes across all repos
              for (const [lang, bytes] of Object.entries(repoLanguages)) {
                languageStats[lang] = (languageStats[lang] || 0) + bytes;
              }
            }
          } catch (err) {
            // If we can't fetch repo languages, fall back to the primary language
            if (repo.language) {
              languageStats[repo.language] = (languageStats[repo.language] || 0) + 100; // Assign some default value
            }
          }
        }

        // Sort languages by total bytes
        const sortedLanguages: LanguageStats = {};
        Object.entries(languageStats)
          .sort(([, a], [, b]) => b - a)
          .forEach(([lang, bytes]) => {
            sortedLanguages[lang] = bytes;
          });

        setData({
          user: userData,
          repos: originalRepos,
          languages: sortedLanguages,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          user: null,
          repos: [],
          languages: {},
          loading: false,
          error: error instanceof Error ? error.message : 'An unknown error occurred',
        });
      }
    };

    fetchData();
  }, [username]);

  return data;
};