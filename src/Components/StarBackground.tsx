import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GlowEffect from '../Components/StarsGlow.tsx';

const Stars = () => {
  const groupRef = useRef<THREE.Group>(null);

  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 200; i++) {
      positions.push([
        THREE.MathUtils.randFloatSpread(80),
        THREE.MathUtils.randFloatSpread(40),
        THREE.MathUtils.randFloatSpread(50)
      ]);
    }
    return positions;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x += 0.0003;
    }
  });

  return (
    <group ref={groupRef}>
      {starPositions.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="h-screen w-full bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] overflow-hidden" style={{
      animation: "gradient-bg 7s ease infinite",
      backgroundSize: "200% 200%",
    }}>
        
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight />
        <Stars />
        <GlowEffect />
      </Canvas>
    </div>
  );
};

export default StarsBackground;
