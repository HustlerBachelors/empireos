import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#070707',
        panel: '#111111',
        gold: '#d4af37',
        accent: '#f7c948',
        glow: '#ffd95a',
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 34%)',
      },
    },
  },
  plugins: [],
};

export default config;
