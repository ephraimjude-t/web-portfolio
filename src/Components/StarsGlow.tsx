import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const GlowEffect = () => {
  return (
    <EffectComposer>
      <Bloom 
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={5}
        height={100}
      />
    </EffectComposer>
  );
};

export default GlowEffect; 