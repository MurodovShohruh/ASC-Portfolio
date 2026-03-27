import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'
import useGithubRepos from '../../hooks/useGithubRepos'

const LANG_MAP = { JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', CSS: '#563d7c', HTML: '#e34c26' }

function RepoCard({ repo, index }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <Card style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)',
            transformOrigin: 'left',
          }}
        />

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1rem' }}>
          {repo.language && (
            <span style={{
              fontSize: '0.7rem', padding: '3px 10px',
              borderRadius: 100,
              border: '0.5px solid rgba(167,139,250,0.3)',
              color: '#a78bfa',
              background: 'rgba(167,139,250,0.08)',
              letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: LANG_MAP[repo.language] || '#888', display: 'inline-block' }} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span style={{
              fontSize: '0.7rem', padding: '3px 10px',
              borderRadius: 100,
              border: '0.5px solid rgba(255,255,255,0.1)',
              color: 'rgba(232,232,240,0.5)',
              background: 'rgba(255,255,255,0.04)',
            }}>
              ★ {repo.stargazers_count}
            </span>
          )}
        </div>

        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: '#e8e8f0' }}>
          {repo.name}
        </h3>
        <p style={{ fontSize: '0.83rem', color: 'rgba(232,232,240,0.4)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          {repo.description || 'No description provided.'}
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ fontSize: '0.78rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 4 }}>
            ↗ View Repo
          </span>
        </div>
      </Card>
    </motion.a>
  )
}

function SkeletonCard() {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)', border: '0.5px solid rgba(255,255,255,0.06)',
      borderRadius: 16, padding: '1.75rem',
    }}>
      {[100, 80, 90, 60].map((w, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          style={{ height: i === 0 ? 12 : i === 3 ? 8 : 16, width: `${w}%`, background: 'rgba(255,255,255,0.06)', borderRadius: 6, marginBottom: i === 3 ? 0 : 12 }}
        />
      ))}
    </div>
  )
}

export default function Projects({ t }) {
  const { repos, loading } = useGithubRepos()

  return (
    <Container id="projects">
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}
      >
        {t.portfolio}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '3.5rem', lineHeight: 1.1 }}
      >
        {t.featured}
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {loading
          ? [1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : repos.slice(0, 6).map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i} />)
        }
      </div>
    </Container>
  )
}
