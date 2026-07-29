import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for global rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Sphere Wireframe (Crimson Red)
    const geometry = new THREE.IcosahedronGeometry(5, 3);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0033,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireframeSphere = new THREE.Mesh(geometry, material);
    mainGroup.add(wireframeSphere);

    // 2. Inner Glowing Core (Deep Maroon)
    const innerGeo = new THREE.SphereGeometry(3.8, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b0000,
      transparent: true,
      opacity: 0.35,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerSphere);

    // 3. Particle Stars Field (Flame Red)
    const particleCount = 400;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.2 + Math.random() * 1.8;

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xff4d4d,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 4. Orbiting Headphone/Studio Rings (Flame Red & Gold)
    const ringGeo = new THREE.TorusGeometry(7, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff0033,
      transparent: true,
      opacity: 0.6,
    });

    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat.clone());
    ring2.material.color.setHex(0xffb703);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // Mouse interactive movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x += 0.001;

      mainGroup.rotation.y += targetX * 0.02;
      mainGroup.rotation.x += targetY * 0.02;

      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Central Floating Logo Badge overlay */}
      <div className="pointer-events-none z-10 text-center px-4 py-2 rounded-full glass-panel border border-brand-red/40 shadow-[0_0_30px_rgba(255,0,51,0.3)] animate-pulse-slow">
        <span className="text-xs uppercase tracking-widest text-brand-red font-bold flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-5 h-5 inline-block" />
          Kuakata Multimedia 3D Core
        </span>
      </div>
    </div>
  );
}
