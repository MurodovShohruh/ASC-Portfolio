import { motion } from 'framer-motion'
import { ButtonPrimary, ButtonGhost } from '../ui/Button'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

const SOCIALS = [
  {
    href: 'https://github.com/MurodovShohruh',
    label: 'GitHub',
    svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>',
  },
  {
    href: 'https://t.me/ASC_Shohruh',
    label: 'Telegram',
    svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  },
  {
    href: 'https://x.com/Asc_Shohruh',
    label: 'X',
    svg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
]

export default function Hero({ lang, t }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}
      />

      <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', border: '0.5px solid rgba(167,139,250,0.4)', borderRadius: 100, fontSize: '0.72rem', color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem', background: 'rgba(167,139,250,0.08)' }}>
        <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
        {t.available}
      </motion.div>

      <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
        <span className="gradient-text">{t.title1}</span>
        <br />
        <span style={{ color: 'rgba(232,232,240,0.9)' }}>{t.title2}</span>
      </motion.h1>

      <motion.p {...fadeUp(0.2)} style={{ fontSize: '1.05rem', color: 'rgba(232,232,240,0.5)', maxWidth: 480, lineHeight: 1.75, marginBottom: '2.5rem' }}>
        {t.tagline}
      </motion.p>

      <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.75rem' }}>
        <ButtonPrimary onClick={() => scrollTo('projects')}>{t.viewProjects}</ButtonPrimary>
        <ButtonGhost onClick={() => scrollTo('contact')}>{t.getInTouch}</ButtonGhost>
      </motion.div>

      {/* Social icons */}
      <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', alignItems: 'center' }}>
        {SOCIALS.map(({ href, label, svg }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ width: 40, height: 40, borderRadius: '50%', border: '0.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(232,232,240,0.5)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, background 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.background = 'rgba(167,139,250,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(232,232,240,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(232,232,240,0.3)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
      >
        <motion.div animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(167,139,250,0.6), transparent)' }} />
        {t.scroll}
      </motion.div>
    </section>
  )
}
