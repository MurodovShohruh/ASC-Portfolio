import { motion } from 'framer-motion'

export function ButtonPrimary({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
        border: 'none',
        boxShadow: '0 4px 20px rgba(167,139,250,0.25)',
      }}
    >
      {children}
    </motion.button>
  )
}

export function ButtonGhost({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-8 py-3.5 rounded-full text-sm font-medium tracking-wide cursor-pointer ${className}`}
      style={{
        background: 'transparent',
        border: '0.5px solid rgba(255,255,255,0.2)',
        color: 'rgba(232,232,240,0.8)',
      }}
    >
      {children}
    </motion.button>
  )
}
