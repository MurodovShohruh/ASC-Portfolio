import { motion } from 'framer-motion'

export default function Card({ children, className = '', onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`rounded-2xl p-6 cursor-default ${className}`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '0.5px solid rgba(255,255,255,0.08)',
      }}
    >
      {children}
    </motion.div>
  )
}
