'use client';

import React, { useEffect, useRef } from 'react';

interface EnergyWaveformProps {
  intensity?: number; // 0 to 1
  color?: string; // hex or rgb
  height?: number;
  className?: string;
  label?: string;
  statusText?: string;
}

export const EnergyWaveform: React.FC<EnergyWaveformProps> = ({
  intensity = 0.8,
  color = '#D97706',
  height = 56,
  className = '',
  label = 'LIVE GRID FREQUENCY',
  statusText = '50.02 Hz • PHASE SYNCED',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, width, h);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(width, h / 2);
      ctx.stroke();

      // Primary sine wave (Solar Inverter Waveform)
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = color;
      ctx.shadowColor = 'rgba(217, 119, 6, 0.2)';
      ctx.shadowBlur = 4;

      const amplitude = (h / 3) * intensity;
      const frequency = 0.04;

      for (let x = 0; x < width; x++) {
        const y = h / 2 + Math.sin(x * frequency + phase) * amplitude + Math.sin(x * 0.02 + phase * 0.6) * (amplitude * 0.25);
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Secondary subtle trailing harmonic wave
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(8, 145, 178, 0.5)';
      ctx.shadowBlur = 0;

      for (let x = 0; x < width; x++) {
        const y2 = h / 2 + Math.sin(x * frequency * 1.5 + phase * 1.2) * (amplitude * 0.5);
        if (x === 0) {
          ctx.moveTo(x, y2);
        } else {
          ctx.lineTo(x, y2);
        }
      }
      ctx.stroke();

      phase += 0.04;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, color]);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-center justify-between text-[9px] font-mono tracking-wider uppercase text-slate-500">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {label}
        </span>
        <span className="text-amber-700 font-bold">{statusText}</span>
      </div>
      <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={300}
          height={height}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
};
