'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Compass, SunMedium, Layers, ShieldCheck, Zap } from 'lucide-react';

export const SolarPanelViewer3D: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<number>(22);
  const [cellType, setCellType] = useState<'MONO' | 'TOPCON'>('TOPCON');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const panelGroupRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.8, 3.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Panel Group
    const panelGroup = new THREE.Group();
    panelGroupRef.current = panelGroup;
    scene.add(panelGroup);

    // Dimensions for standard 550W Module
    const pW = 1.3;
    const pH = 2.2;
    const pD = 0.04;

    // Aluminum Anodized Silver Frame
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xc4cdd5,
      metalness: 0.9,
      roughness: 0.25,
    });
    const frameGeo = new THREE.BoxGeometry(pW, pH, pD);
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    panelGroup.add(frameMesh);

    // Front Glass & PV Silicon Cells
    const cellColor = cellType === 'TOPCON' ? 0x051329 : 0x0a1c38;
    const cellMat = new THREE.MeshStandardMaterial({
      color: cellColor,
      metalness: 0.75,
      roughness: 0.1,
    });
    const cellGeo = new THREE.BoxGeometry(pW - 0.05, pH - 0.05, 0.006);
    const cellMesh = new THREE.Mesh(cellGeo, cellMat);
    cellMesh.position.z = pD / 2 + 0.002;
    panelGroup.add(cellMesh);

    // Silver Busbar Multi-Wires
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xecd179,
      transparent: true,
      opacity: 0.8,
    });
    for (let i = -0.5; i <= 0.5; i += 0.12) {
      const wireGeo = new THREE.PlaneGeometry(0.006, pH - 0.08);
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      wireMesh.position.set(i, 0, pD / 2 + 0.004);
      panelGroup.add(wireMesh);
    }

    // Backsheet / Junction Box on Rear
    const jBoxMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.6,
    });
    const jBoxGeo = new THREE.BoxGeometry(0.2, 0.15, 0.05);
    const jBoxMesh = new THREE.Mesh(jBoxGeo, jBoxMat);
    jBoxMesh.position.set(0, 0.7, -pD / 2 - 0.025);
    panelGroup.add(jBoxMesh);

    // Base Stand Mount
    const mountMat = new THREE.MeshStandardMaterial({
      color: 0x4a5568,
      metalness: 0.8,
      roughness: 0.4,
    });
    const mountLeg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.4), mountMat);
    mountLeg1.position.set(-0.5, -0.6, -0.4);
    panelGroup.add(mountLeg1);

    const mountLeg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.4), mountMat);
    mountLeg2.position.set(0.5, -0.6, -0.4);
    panelGroup.add(mountLeg2);

    // Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xfff0b3, 3.2);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const goldPoint = new THREE.PointLight(0xe5a93c, 2, 8);
    goldPoint.position.set(-2, 2, 2);
    scene.add(goldPoint);

    // Drag to rotate interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !panelGroup) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;

      panelGroup.rotation.y += deltaX * 0.01;
      panelGroup.rotation.x += deltaY * 0.01;

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !panelGroup || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;

      panelGroup.rotation.y += deltaX * 0.01;
      panelGroup.rotation.x += deltaY * 0.01;

      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animate
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (autoRotate && !isDragging && panelGroup) {
        panelGroup.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [cellType, autoRotate]);

  // Update tilt angle dynamically
  useEffect(() => {
    if (panelGroupRef.current) {
      panelGroupRef.current.rotation.x = -THREE.MathUtils.degToRad(tilt);
    }
  }, [tilt]);

  // Approximate irradiance formula based on tilt
  const irradianceEff = Math.round(92 + (1 - Math.abs(tilt - 23) / 45) * 8);

  return (
    <div className="rounded-xl bg-forest-950 border border-forest-800 p-6 text-solar-cream relative overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-forest-900">
        <div>
          <div className="inline-flex items-center gap-2 text-solar-gold text-xs font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            <span>Interactive 3D Hardware Inspector</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display uppercase text-white mt-1">
            Tier-1 Photovoltaic Module Simulator
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border transition-colors ${
              autoRotate
                ? 'bg-solar-gold text-forest-950 border-solar-gold font-bold'
                : 'bg-forest-900 text-solar-cream border-forest-700'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{autoRotate ? 'Auto Orbit On' : 'Orbit Paused'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative h-[320px] sm:h-[400px] w-full my-4 rounded-lg overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900/60 to-forest-950 border border-forest-900/80 cursor-grab active:cursor-grabbing">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          aria-label="Solar module technology demonstration"
        >
          <source src="/solar-module_simulator.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest-950/45" />
        <div ref={canvasContainerRef} className="w-full h-full" />

        {/* Overlay 3D guidance */}
        <div className="absolute top-3 left-3 text-[11px] font-medium text-charcoal-400 bg-forest-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-forest-800 pointer-events-none">
          Click & Drag to Rotate 360°
        </div>

        <div className="absolute bottom-3 right-3 text-right">
          <div className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold">
            Simulated Yield Efficiency
          </div>
          <div className="text-xl font-bold font-display text-emerald-400">
            {irradianceEff}% Irradiance
          </div>
        </div>
      </div>

      {/* Real-time Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-forest-900">
        {/* Tilt Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-charcoal-300">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-solar-gold" />
              <span>Installation Tilt Angle</span>
            </span>
            <span className="text-solar-gold font-bold">{tilt}° (UP Optimal: 22°–25°)</span>
          </div>
          <input
            type="range"
            min="0"
            max="60"
            step="1"
            value={tilt}
            onChange={(e) => setTilt(Number(e.target.value))}
            className="w-full h-2 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-solar-gold border border-forest-700"
          />
          <div className="flex justify-between text-[10px] text-charcoal-500">
            <span>0° (Flat)</span>
            <span>23° (Optimal Latitude)</span>
            <span>60° (Steep)</span>
          </div>
        </div>

        {/* Cell Tech Selector */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Silicon Cell Architecture</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setCellType('TOPCON')}
              className={`py-2 px-3 rounded text-xs font-bold uppercase tracking-wider border transition-colors ${
                cellType === 'TOPCON'
                  ? 'bg-forest-800 border-solar-gold text-solar-gold'
                  : 'bg-forest-900/60 border-forest-800 text-charcoal-400 hover:text-white'
              }`}
            >
              N-Type TOPCon
            </button>
            <button
              onClick={() => setCellType('MONO')}
              className={`py-2 px-3 rounded text-xs font-bold uppercase tracking-wider border transition-colors ${
                cellType === 'MONO'
                  ? 'bg-forest-800 border-solar-gold text-solar-gold'
                  : 'bg-forest-900/60 border-forest-800 text-charcoal-400 hover:text-white'
              }`}
            >
              Mono PERC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
