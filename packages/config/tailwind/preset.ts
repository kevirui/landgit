import type { Config } from 'tailwindcss';

/**
 * LandGit Tailwind Preset
 *
 * Design System Configuration
 * - Colors: Primary (#f0efe7), Secondary (#f14e32), Tertiary (#0388a6)
 * - Fonts: Poppins (primary), Mona Sans (secondary), Monaspace (tertiary/code)
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Core Palette
        primary: '#f0efe7',
        secondary: '#f14e32',
        tertiary: '#0388a6',
        white: '#eeeeee',
        black: '#000000',
        // Semantic aliases
        accent: {
          DEFAULT: '#f14e32',
          hover: '#d94429',
        },
        highlight: {
          DEFAULT: '#0388a6',
          hover: '#026d87',
        },
      },
      fontFamily: {
        primary: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        secondary: ['var(--font-mona-sans)', 'Mona Sans', 'sans-serif'],
        tertiary: ['Monaspace Neon', 'Monaspace', 'monospace'],
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        mono: ['Monaspace Neon', 'Monaspace', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
};

export default preset;
