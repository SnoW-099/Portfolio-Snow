"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function IndigoShape() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.elapsedTime
      
      // Rotate
      mesh.current.rotation.x = t * 0.15
      mesh.current.rotation.y = t * 0.2
      
      // Move side to side & scale up/down (breathing)
      mesh.current.position.x = 0.6 + Math.sin(t * 0.5) * 1.5
      const scale = 1 + Math.sin(t * 0.8) * 0.15
      mesh.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0.6, 0, 0]}>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.06} />
      </mesh>
    </Float>
  )
}

function AmberShape() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.elapsedTime
      
      // Counter-rotate
      mesh.current.rotation.x = -t * 0.1
      mesh.current.rotation.y = -t * 0.15
      mesh.current.rotation.z = t * 0.1
      
      // Move side to side (opposing) & big/small
      mesh.current.position.x = -2.2 + Math.cos(t * 0.4) * 2
      const scale = 1 + Math.cos(t * 0.7) * 0.2
      mesh.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={mesh} position={[-2.2, 0.8, -3]}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#BFDBFE" wireframe transparent opacity={0.05} />
      </mesh>
    </Float>
  )
}

export default function BackgroundGeometry() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <IndigoShape />
        <AmberShape />
      </Canvas>
    </div>
  )
}
