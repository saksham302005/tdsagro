'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Wrench,
  Layers,
  Cpu,
  Zap,
  Gauge,
  ShieldCheck,
  RotateCw,
  Play,
  Pause,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface ScrollytellingShowcaseProps {
  initialMode?: 'solar' | 'motors';
  onOpenConsultation?: (product: string) => void;
}

interface FeatureStep {
  step: number;
  title: string;
  tag: string;
  metric: string;
  description: string;
  cameraAngle: number;
  layerHighlight: string;
}

const SOLAR_STEPS: FeatureStep[] = [
  {
    step: 1,
    title: 'N-Type TOPCon Silicon Wafer Architecture',
    tag: 'ULTRA-HIGH EFFICIENCY',
    metric: '22.8% Module Efficiency',
    description:
      'Zero Light Induced Degradation (LID) with tunnel oxide passivated contacts, generating up to 15% more kilowatt-hours in extreme North Indian heat conditions.',
    cameraAngle: 0,
    layerHighlight: 'Front Glass & Anti-Reflective Arc Coating',
  },
  {
    step: 2,
    title: 'Dual-Glass Bifacial Photovoltaic Substrate',
    tag: 'BIFACIAL REAR GAIN',
    metric: '+25% Albedo Reflection Energy',
    description:
      'High-transparency 2.0mm tempered glass capturing direct sunlight on the front and reflected ambient light from white roof/ground surfaces on the rear.',
    cameraAngle: 45,
    layerHighlight: 'Encapsulant POE & Bifacial Silicon Core',
  },
  {
    step: 3,
    title: 'Anodized 35mm Marine Aluminum Armor Frame',
    tag: 'STORM & CYCLONE RATED',
    metric: '5400 Pa Snow / 2400 Pa Wind Load',
    description:
      'High-grade corrosion resistant alloy framing certified for 25+ years of exposure to harsh rains, rural dust, and industrial sulfur environments.',
    cameraAngle: 90,
    layerHighlight: 'Precision Anodized Structural Perimeter',
  },
  {
    step: 4,
    title: 'Smart MPPT Grid Inverter & Telemetry Gateway',
    tag: 'DSP CONTROLLED',
    metric: '99.5% Pure Sine Conversion',
    description:
      'Real-time frequency matching, anti-islanding grid safety disconnect, and automated DISCOM net-metering export tracking.',
    cameraAngle: 135,
    layerHighlight: 'Intelligent Inverter & Protection Module',
  },
];

const MOTOR_STEPS: FeatureStep[] = [
  {
    step: 1,
    title: 'High-Torque CRDI Turbo Diesel Powertrain',
    tag: '75 HP HEAVY TILLAGE',
    metric: '310 Nm Peak Torque @ 1400 RPM',
    description:
      'Common Rail Direct Injection (CRDI) technology delivering massive low-end pulling power with up to 18% lower diesel consumption in heavy rotavator operations.',
    cameraAngle: 0,
    layerHighlight: '4-Cylinder Intercooled Engine Core',
  },
  {
    step: 2,
    title: '12F+12R Synchromesh Shuttle Transmission',
    tag: 'SMOOTH GEAR SHIFT',
    metric: 'Dual Clutch with Independent PTO',
    description:
      'Effortless forward-to-reverse shuttle shifting for rapid front-loader handling, laser leveler cycles, and tight headland turnarounds.',
    cameraAngle: 45,
    layerHighlight: 'Synchromesh Gearbox & Planetary Final Drive',
  },
  {
    step: 3,
    title: 'Precision Hydraulic Lift & ADDC Sensing',
    tag: '2500 KG CAPACITY',
    metric: 'Auto Depth & Draft Control (ADDC)',
    description:
      'Maintains consistent implement tillage depth across uneven soil patches, preventing tractor stalling and conserving fuel.',
    cameraAngle: 90,
    layerHighlight: 'Electro-Hydraulic Lift Cylinder & 3-Point Linkage',
  },
  {
    step: 4,
    title: 'Heavy-Duty Forged Boron Rotor Implements',
    tag: 'ZERO WEAR BLADES',
    metric: 'Multi-Speed Gearbox Compatibility',
    description:
      'Rotary tillers with multi-speed oil bath drive and curved Boron blades engineered for dry hard soil pulverization and paddy wet puddling.',
    cameraAngle: 135,
    layerHighlight: 'Rotor Shaft & Spring-Loaded Trailing Board',
  },
];

export const ScrollytellingShowcase: React.FC<ScrollytellingShowcaseProps> = ({
  initialMode = 'solar',
  onOpenConsultation,
}) => {
  const [activeMode, setActiveMode] = useState<'solar' | 'motors'>(initialMode);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const steps = activeMode === 'solar' ? SOLAR_STEPS : MOTOR_STEPS;
  const currentStep = steps[currentStepIdx] || steps[0];

  // Auto step timer when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length, activeMode]);

  // Smooth Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let rotation = (currentStepIdx * Math.PI) / 2;
    let targetRotation = (currentStepIdx * Math.PI) / 2;

    const render = () => {
      targetRotation = (currentStepIdx * Math.PI) / 2;
      rotation += (targetRotation - rotation) * 0.08;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Apple-style backdrop aura
      const grad = ctx.createRadialGradient(centerX, centerY, 40, centerX, centerY, width * 0.45);
      if (activeMode === 'solar') {
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.18)');
        grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.08)');
        grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        grad.addColorStop(0, 'rgba(225, 29, 72, 0.18)');
        grad.addColorStop(0.5, 'rgba(217, 119, 6, 0.08)');
        grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Layer Scrollytelling geometry
      ctx.save();
      ctx.translate(centerX, centerY);

      if (activeMode === 'solar') {
        // Solar Panel 3D Multi-Layer exploded rendering
        const layerCount = 4;
        const layerOffset = 22;

        for (let i = 0; i < layerCount; i++) {
          const isHighlighted = i === currentStepIdx;
          const yPos = (i - 1.5) * layerOffset + Math.sin(rotation + i) * 6;

          ctx.save();
          ctx.translate(0, yPos);
          ctx.rotate(0.25 * Math.sin(rotation));

          // Draw layer rectangle with isometric skew
          ctx.beginPath();
          const w = 240 - i * 10;
          const h = 130 - i * 5;

          ctx.transform(1, -0.2, 0.5, 0.8, 0, 0);

          if (isHighlighted) {
            ctx.fillStyle = 'rgba(245, 158, 11, 0.85)';
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#f59e0b';
            ctx.shadowBlur = 20;
          } else {
            ctx.fillStyle = `rgba(${30 + i * 20}, ${41 + i * 20}, ${59 + i * 20}, 0.75)`;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;
          }

          ctx.roundRect(-w / 2, -h / 2, w, h, 8);
          ctx.fill();
          ctx.stroke();

          // Draw solar grid lines on top layer
          if (i === 0 || isHighlighted) {
            ctx.strokeStyle = isHighlighted ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 1;
            for (let gx = -w / 2 + 20; gx < w / 2; gx += 25) {
              ctx.beginPath();
              ctx.moveTo(gx, -h / 2);
              ctx.lineTo(gx, h / 2);
              ctx.stroke();
            }
          }

          ctx.restore();
        }
      } else {
        // TDS Motors Machinery Engine & Transmission Scrollytelling geometry
        const compCount = 4;
        for (let i = 0; i < compCount; i++) {
          const isHighlighted = i === currentStepIdx;
          const angle = rotation + (i * Math.PI) / 2;
          const dist = 65 + (isHighlighted ? 20 : 0);
          const px = Math.cos(angle) * dist;
          const py = Math.sin(angle) * (dist * 0.55);

          ctx.save();
          ctx.translate(px, py);

          // Draw machinery node
          ctx.beginPath();
          const nodeRadius = isHighlighted ? 38 : 26;

          if (isHighlighted) {
            ctx.fillStyle = 'rgba(225, 29, 72, 0.9)';
            ctx.strokeStyle = '#fda4af';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#e11d48';
            ctx.shadowBlur = 22;
          } else {
            ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 0;
          }

          ctx.arc(0, 0, nodeRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Internal gear tooth simulation
          ctx.strokeStyle = isHighlighted ? '#ffffff' : 'rgba(255,255,255,0.3)';
          ctx.lineWidth = 2;
          for (let g = 0; g < 8; g++) {
            const ga = g * (Math.PI / 4) + rotation * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(ga) * (nodeRadius - 10), Math.sin(ga) * (nodeRadius - 10));
            ctx.lineTo(Math.cos(ga) * nodeRadius, Math.sin(ga) * nodeRadius);
            ctx.stroke();
          }

          ctx.restore();
        }
      }

      ctx.restore();
      animFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animFrameId);
  }, [activeMode, currentStepIdx]);

  return (
    <section className="py-16 sm:py-24 bg-[#FAFBF9] text-slate-900 relative overflow-hidden border-t border-slate-200 os-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionHeading
            eyebrow="TDS AGRO INNOVATION LAB • 3D PRODUCT SCROLLYTELLING"
            title="ENGINEERED TO PERFECTION."
            description="Explore the multi-layer hardware architectures powering our Solar Energy and TDS Motors farm mechanization divisions."
            theme="light"
            align="left"
            className="mb-0"
          />

          {/* Division Selector Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => {
                setActiveMode('solar');
                setCurrentStepIdx(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeMode === 'solar'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Solar Technology (tdssolar.in)</span>
            </button>

            <button
              onClick={() => {
                setActiveMode('motors');
                setCurrentStepIdx(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeMode === 'motors'
                  ? 'bg-rose-600 text-white shadow-md scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>TDS Motors Machinery</span>
            </button>
          </div>
        </div>

        {/* Master Scrollytelling Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Left Canvas 3D Interactive Viewer (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full aspect-square max-w-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 flex items-center justify-center shadow-inner">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
              />

              {/* Floating Layer Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 font-medium truncate">
                  Layer: <strong className="text-slate-900">{currentStep.layerHighlight}</strong>
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${activeMode === 'solar' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'}`}>
                  STEP {currentStep.step}/4
                </span>
              </div>

              {/* Top Right Play/Pause Controls */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/90 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Step Scrubber Indicators */}
            <div className="mt-4 flex items-center gap-2">
              {steps.map((st, idx) => (
                <button
                  key={st.step}
                  onClick={() => {
                    setCurrentStepIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentStepIdx
                      ? activeMode === 'solar'
                        ? 'w-10 bg-amber-500'
                        : 'w-10 bg-rose-500'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Scrollytelling Telemetry Content (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMode}-${currentStep.step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase ${activeMode === 'solar' ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30' : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'}`}>
                    {currentStep.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Phase 0{currentStep.step} Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 uppercase tracking-tight leading-snug">
                  {currentStep.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {currentStep.description}
                </p>

                {/* Benchmark Metric Pill */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                      PERFORMANCE METRIC
                    </span>
                    <span className="text-lg font-black font-display text-amber-300">
                      {currentStep.metric}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <ShieldCheck className="w-4 h-4" />
                    <span>LAB CERTIFIED</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Step Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
              {steps.map((st, idx) => (
                <button
                  key={st.step}
                  onClick={() => {
                    setCurrentStepIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-2.5 rounded-xl text-left border text-xs font-mono transition-all ${
                    idx === currentStepIdx
                      ? 'bg-slate-900 border-slate-900 text-white font-bold'
                      : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 block">STEP 0{st.step}</span>
                  <span className="truncate block font-semibold">{st.title.split(' ')[0]} {st.title.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() =>
                  onOpenConsultation
                    ? onOpenConsultation(`${activeMode === 'solar' ? 'Solar EPC' : 'TDS Motors Machinery'}`)
                    : (window.location.href = activeMode === 'solar' ? '/solar' : '/motors')
                }
                icon={<ChevronRight className="w-4 h-4" />}
                className="font-bold shadow-md"
              >
                Inquire About {activeMode === 'solar' ? 'Solar Solutions' : 'TDS Machinery'}
              </Button>

              {activeMode === 'solar' ? (
                <a
                  href="https://tdssolar.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono font-bold text-slate-700 transition-colors"
                >
                  Go to tdssolar.in Portal →
                </a>
              ) : (
                <Link
                  href="/motors"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono font-bold text-slate-700 transition-colors"
                >
                  View All Machinery Models →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
