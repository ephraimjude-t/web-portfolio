import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillPlanetProps {
  position: [number, number, number];
  label: string;
  color?: string;
}

const SkillPlanet: React.FC<SkillPlanetProps> = ({ position, label, color = '#00ffff' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color={color} emissive={hovered ? color : '#000000'} />
      </mesh>
      <Text position={[0, -1.2, 0]} fontSize={0.4} color="white" anchorX="center">
        {label}
      </Text>
      {hovered && (
        <Html center>
          <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
            {label} skill
          </div>
        </Html>
      )}
    </group>
  );
};

export default SkillPlanet;
