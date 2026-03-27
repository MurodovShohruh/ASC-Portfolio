import { useState, useEffect } from 'react'
import { githubService } from '../services/githubService'

export default function useGithubRepos() {
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [reposData, userData] = await Promise.all([
          githubService.getRepos(),
          githubService.getUser(),
        ])
        setRepos(reposData)
        setUser(userData)
      } catch (err) {
        setError(err.message)
        // Fallback demo data
        setRepos([
          { id: 1, name: 'asc-portfolio', description: 'Personal portfolio built with React + Three.js', stargazers_count: 12, language: 'JavaScript', html_url: '#' },
          { id: 2, name: 'scalable-ui-kit', description: 'Premium UI component library with Framer Motion', stargazers_count: 34, language: 'TypeScript', html_url: '#' },
          { id: 3, name: 'three-vite-starter', description: 'Three.js + Vite + React starter template', stargazers_count: 21, language: 'JavaScript', html_url: '#' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { repos, user, loading, error }
}
