import { motion } from 'framer-motion'
import { useState } from 'react'
import Container from '../ui/Container'
import { ButtonPrimary } from '../ui/Button'

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xgopvnbv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: '14px 16px',
    color: '#e8e8f0',
    fontSize: '0.9rem',
    fontFamily: "'Space Grotesk', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const LINKS = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/MurodovShohruh' },
    { icon: '✈️', label: 'Telegram', href: 'https://t.me/ASC_Shohruh' },
    { icon: '🐦', label: 'X (Twitter)', href: 'https://x.com/Asc_Shohruh' },
    { icon: '📧', label: 'Email', href: 'mailto:your@email.com' },
  ]

  return (
    <Container id="contact">
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: 'clamp(2rem, 5vw, 3.5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: 780,
        margin: '0 auto',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}
        >
          {t.letsConnect}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}
        >
          Ready to build something{' '}
          <span className="gradient-text">extraordinary?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ color: 'rgba(232,232,240,0.4)', fontSize: '0.9rem', marginBottom: '2.5rem', lineHeight: 1.7 }}
        >
          {t.contactDesc}
        </motion.p>

        {/* Form */}
        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ padding: '2rem', color: '#34d399', fontSize: '1rem', fontWeight: 500 }}
          >
            ✅ Xabaringiz yuborildi! Tez orada javob beraman.
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ padding: '2rem', color: '#f87171', fontSize: '1rem', fontWeight: 500 }}
          >
            ❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', textAlign: 'left' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                name="name"
                placeholder="Ismingiz"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <textarea
              name="message"
              placeholder="Xabaringiz..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonPrimary>
                {status === 'sending' ? '⏳ Yuborilmoqda...' : t.sendMsg}
              </ButtonPrimary>
            </div>
          </motion.form>
        )}

        {/* Social links */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, borderColor: 'rgba(167,139,250,0.5)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '9px 18px',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                color: 'rgba(232,232,240,0.55)',
                fontSize: '0.82rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </Container>
  )
}
