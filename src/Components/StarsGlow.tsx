import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Noise } from '@react-three/postprocessing';
import { Vignette } from '@react-three/postprocessing';


const GlowEffect = () => {
  return (
    <EffectComposer>
      <Bloom 
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={5}
        height={100}
      />
      <Noise 
        opacity={0.1}
      />
      <Vignette
        eskil={false}
        offset={0.2}
        darkness={0.8}
      />
    </EffectComposer>
  );
};

export default GlowEffect; 