import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04130D',
          900: '#072418',
          850: '#0B2F20',
          800: '#0F3B29',
          700: '#16573C',
          600: '#1D7250',
        },
        obsidian: {
          950: '#05080A',
          900: '#080E14',
          850: '#0D151F',
          800: '#121D2B',
          700: '#1E2C3F',
          600: '#2F415A',
        },
        solar: {
          gold: '#E5A93C',
          amber: '#F59E0B',
          glow: '#FCD34D',
          cream: '#FBFBF8',
          offwhite: '#F4F4EE',
          sand: '#ECECE3',
          dark: '#0C110F',
          surface: '#121815',
        },
        cyber: {
          cyan: '#06B6D4',
          cyanGlow: '#22D3EE',
          emerald: '#10B981',
          emeraldGlow: '#34D399',
          amber: '#F59E0B',
          violet: '#8B5CF6',
        },
        charcoal: {
          900: '#121614',
          800: '#1B211E',
          700: '#2A332E',
          600: '#47534D',
          500: '#6B7A72',
          400: '#94A39B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'solar-radial': 'radial-gradient(circle at 50% 0%, rgba(229, 169, 60, 0.18), transparent 70%)',
        'forest-radial': 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.12), transparent 70%)',
        'os-radial-cyber': 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), rgba(245, 158, 11, 0.08), transparent 75%)',
        'os-glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'os-glow': '0 0 25px -5px rgba(229, 169, 60, 0.3)',
        'os-glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'os-glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'os-card': '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'os-card-hover': '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 25px rgba(229, 169, 60, 0.2), 0 0 0 1px rgba(229, 169, 60, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'wave-flow': 'waveFlow 8s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        waveFlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
