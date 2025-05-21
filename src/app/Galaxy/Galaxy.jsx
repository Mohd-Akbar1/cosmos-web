'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const Galaxy = () => {
  const ref = useRef();

  // Load a small round star texture
   const starTexture = useLoader(TextureLoader, '/star.png'); // You'll add this file below 👇

  const { positions, colors } = useMemo(() => {
    const starCount = 100;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 100;
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(angle2) * Math.cos(angle1);
      positions[i3 + 1] = radius * Math.sin(angle2) * Math.sin(angle1);
      positions[i3 + 2] = radius * Math.cos(angle2);

      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 70%)`);
      colors.set([color.r, color.g, color.b], i3);
    }

    return { positions, colors };
  }, []);

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [positions, colors]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={1.5}
        map={starTexture}
        transparent={true}
        alphaTest={0.1}
        vertexColors={true}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <ambientLight />
        <Galaxy />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
