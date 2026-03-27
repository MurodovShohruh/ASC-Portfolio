import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../utils/constants'

const LANGS = ['uz', 'en', 'ru']

export default function Layout({ children, lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 2.5rem',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.07)' : '0.5px solid transparent',
          background: scrolled ? 'rgba(5,5,16,0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '1.35rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em',
            cursor: 'pointer',
          }}
        >
          ASC
        </div>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(232,232,240,0.55)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'color 0.2s',
                padding: 0,
              }}
              onMouseEnter={(e) => e.target.style.color = '#a78bfa'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(232,232,240,0.55)'}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Lang switcher + menu */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? 'rgba(167,139,250,0.15)' : 'transparent',
                border: lang === l ? '0.5px solid rgba(167,139,250,0.4)' : '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                padding: '4px 10px',
                color: lang === l ? '#a78bfa' : 'rgba(232,232,240,0.4)',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.2s',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer style={{
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        padding: '2rem 2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.78rem',
        color: 'rgba(232,232,240,0.25)',
        flexWrap: 'wrap',
        gap: '1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <span>© 2026 MurodovShohruh · ASC</span>
        <span style={{ color: 'rgba(232,232,240,0.12)' }}>Architect of Scalable Code</span>
        <span>{t.footerBuilt}</span>
      </footer>
    </div>
  )
}
