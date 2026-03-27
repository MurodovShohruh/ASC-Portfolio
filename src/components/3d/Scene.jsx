import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function RotatingStars() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.05
    }
  })
  return (
    <group ref={ref}>
      <Stars
        radius={120}
        depth={60}
        count={5000}
        factor={4}
        saturation={0.3}
        fade
        speed={0.5}
      />
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 1] }}
    >
      <RotatingStars />
    </Canvas>
  )
}
