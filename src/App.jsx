import { lazy, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './app/layout.jsx'
import { LANG } from './utils/constants.js'

// 3D Scene — always eager loaded
import Scene from './components/3d/Scene.jsx'

// Sections — lazy loaded for performance
const Hero = lazy(() => import('./components/sections/Hero.jsx'))
const About = lazy(() => import('./components/sections/About.jsx'))
const Projects = lazy(() => import('./components/sections/Projects.jsx'))
const Contact = lazy(() => import('./components/sections/Contact.jsx'))

function SectionLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '6rem 0' }}>
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #60a5fa)' }}
      />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('uz')
  const t = LANG[lang]

  return (
    <>
      {/* 3D Star Background */}
      <Scene />

      {/* Main Layout */}
      <Layout lang={lang} setLang={setLang} t={t}>
        <Suspense fallback={<SectionLoader />}>
          <Hero lang={lang} t={t} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About t={t} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects t={t} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact t={t} />
        </Suspense>
      </Layout>
    </>
  )
}
