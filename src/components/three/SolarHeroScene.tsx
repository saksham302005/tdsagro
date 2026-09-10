'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const SolarHeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04130d, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- 1. Ambient & Solar Lights ---
    const ambientLight = new THREE.AmbientLight(0x0f2d1e, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffdd66, 3.5);
    sunLight.position.set(5, 8, 4);
    scene.add(sunLight);

    const rimLight = new THREE.PointLight(0x10b981, 2, 10);
    rimLight.position.set(-4, -1, 2);
    scene.add(rimLight);

    // --- 2. Glowing 3D Sun Sphere in Background ---
    const sunGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(4, 4.5, -6);
    scene.add(sunMesh);

    const haloGeo = new THREE.SphereGeometry(1.3, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xe5a93c,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    sunMesh.add(haloMesh);

    // --- 3. Mouse Interaction / Parallax ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0008;
      mouseY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- 4. Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- 5. Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 3;
      camera.position.y = 3.2 - targetY * 2;
      camera.lookAt(0, 0.4, 0);

      const sunPulse = 1 + Math.sin(elapsedTime * 2) * 0.06;
      haloMesh.scale.set(sunPulse, sunPulse, sunPulse);

      renderer.render(scene, camera);
    };

    setIsLoaded(true);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-y-0 right-0 z-10 w-full pointer-events-none transition-opacity duration-1000 lg:w-[68%] lg:translate-x-[12%] ${
        isLoaded ? 'opacity-45 lg:opacity-80' : 'opacity-0'
      }`}
      aria-hidden="true"
    />
  );
};
