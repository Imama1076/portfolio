import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Main Interactive Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 3. Mouse-following Light Attractor Node (Very light, subtle, ethereal)
    // An elegant, luminous floating ring & soft halo that tracks mouse
    const haloGeo = new THREE.RingGeometry(1.6, 1.72, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x9e998e,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const mouseHalo = new THREE.Mesh(haloGeo, haloMat);
    mainGroup.add(mouseHalo);

    // Inner delicate floating diamond ring
    const innerRingGeo = new THREE.RingGeometry(0.8, 0.88, 32);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x7a756c,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const mouseInnerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    mainGroup.add(mouseInnerRing);

    // 4. Subtle, Light 3D Floating Particle Constellation
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const spreadX = 36;
    const spreadY = 24;
    const spreadZ = 16;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * spreadZ;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Light subtle point material (never dark, soft neutral grey/silver)
    const particleMat = new THREE.PointsMaterial({
      color: 0x736f66,
      size: 0.16,
      transparent: true,
      opacity: 0.45,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // 5. Feather-light connecting lines
    const lineGeo = new THREE.BufferGeometry();
    const maxLineSegments = 160;
    const linePositions = new Float32Array(maxLineSegments * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xb5b0a4,
      transparent: true,
      opacity: 0.18,
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    mainGroup.add(lineMesh);

    // 6. Mouse Tracking & Smooth Coordinates Mapping
    let mouseNormX = 0;
    let mouseNormY = 0;
    let targetWorldX = 0;
    let targetWorldY = 0;
    let currentWorldX = 0;
    let currentWorldY = 0;

    const computeWorldBounds = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFov / 2) * camera.position.z;
      const width = height * camera.aspect;
      return { width, height };
    };

    const onPointerMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseNormX = (e.clientX - halfW) / halfW;
      mouseNormY = -(e.clientY - halfH) / halfH; // Invert Y for 3D coordinates

      const bounds = computeWorldBounds();
      targetWorldX = (mouseNormX * bounds.width) / 2;
      targetWorldY = (mouseNormY * bounds.height) / 2;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Window Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // 7. Animation Loop with Mouse Follower & Organic Drift
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp 3D mouse position ("MOUSE JIDHAR JAI UDAR JAI")
      currentWorldX += (targetWorldX - currentWorldX) * 0.06;
      currentWorldY += (targetWorldY - currentWorldY) * 0.06;

      // Position mouse halo exactly where mouse coordinates are in 3D
      mouseHalo.position.x = currentWorldX;
      mouseHalo.position.y = currentWorldY;
      mouseHalo.rotation.z = elapsedTime * 0.35;
      mouseHalo.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

      mouseInnerRing.position.x = currentWorldX;
      mouseInnerRing.position.y = currentWorldY;
      mouseInnerRing.rotation.z = -elapsedTime * 0.5;
      mouseInnerRing.rotation.y = Math.cos(elapsedTime * 0.4) * 0.3;

      // Subtle group tilt responsive to mouse
      mainGroup.rotation.y = currentWorldX * 0.015;
      mainGroup.rotation.x = -currentWorldY * 0.015;

      // Update particle positions with subtle organic drift and gentle mouse attraction
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      let lineIndex = 0;
      const lineArray = lineGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Base drift
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y;
        posArray[i3 + 2] += velocities[i].z;

        // Boundary wrap
        if (posArray[i3] > spreadX / 2) posArray[i3] = -spreadX / 2;
        if (posArray[i3] < -spreadX / 2) posArray[i3] = spreadX / 2;
        if (posArray[i3 + 1] > spreadY / 2) posArray[i3 + 1] = -spreadY / 2;
        if (posArray[i3 + 1] < -spreadY / 2) posArray[i3 + 1] = spreadY / 2;

        // Subtle gentle attraction towards mouse position if nearby
        const dx = currentWorldX - posArray[i3];
        const dy = currentWorldY - posArray[i3 + 1];
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 6) {
          const force = (6 - distToMouse) * 0.0012;
          posArray[i3] += dx * force;
          posArray[i3 + 1] += dy * force;
        }

        // Connecting lines to nearby particles
        if (lineIndex < maxLineSegments * 6) {
          for (let j = i + 1; j < particleCount; j++) {
            const j3 = j * 3;
            const px = posArray[i3] - posArray[j3];
            const py = posArray[i3 + 1] - posArray[j3 + 1];
            const pz = posArray[i3 + 2] - posArray[j3 + 2];
            const dist = Math.sqrt(px * px + py * py + pz * pz);

            if (dist < 4.5 && lineIndex < maxLineSegments * 6) {
              lineArray[lineIndex++] = posArray[i3];
              lineArray[lineIndex++] = posArray[i3 + 1];
              lineArray[lineIndex++] = posArray[i3 + 2];

              lineArray[lineIndex++] = posArray[j3];
              lineArray[lineIndex++] = posArray[j3 + 1];
              lineArray[lineIndex++] = posArray[j3 + 2];
            }
          }
        }
      }

      posAttr.needsUpdate = true;
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIndex / 3);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
