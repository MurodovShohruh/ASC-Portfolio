import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { SKILLS, STATS } from '../../utils/constants'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let current = 0
    const step = Math.ceil(target / 50)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 28)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: '2.5rem',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      {count}{suffix}
    </span>
  )
}

export default function About({ t }) {
  return (
    <Container id="skills">
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}
      >
        {t.skills}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '3.5rem', lineHeight: 1.1 }}
      >
        {t.techStack}
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <Card>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: skill.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', marginBottom: '1rem',
              }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.4rem' }}>{skill.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(232,232,240,0.45)', lineHeight: 1.6, marginBottom: '1rem' }}>{skill.desc}</p>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 100, height: 3, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: '100%', borderRadius: 100, background: 'linear-gradient(to right, #a78bfa, #60a5fa)' }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem', marginTop: '3rem', paddingTop: '3rem',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
      }}>
        {STATS.map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <div style={{ fontSize: '0.78rem', color: 'rgba(232,232,240,0.35)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
