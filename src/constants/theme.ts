/**
 * Theme configuration constants
 */

export const colors = {
  brandBlue: '#4361ee',
  brandPurple: '#7209b7',
  brandLightPurple: '#b5179e',
  brandDeepestBlue: '#0c0c1d',
  black: '#000000',
  white: '#ffffff',
  gray: {
    100: '#f7f7f7',
    200: '#e6e6e6',
    300: '#d5d5d5',
    400: '#b0b0b0',
    500: '#8c8c8c',
    600: '#686868',
    700: '#444444',
    800: '#202020',
    900: '#121212',
  },
};

export const cardTheme = {
  '--card-hover-bg': 'rgba(255, 255, 255, 0.1)',
  '--card-hover-scale': '1.03',
  '--gradient-start': '#2a2a2a',
  '--gradient-end': '#1a1a1a',
  '--transition-duration': '0.4s',
  '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--card-shadow-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--card-width': '320px',
  '--card-height': '240px',
  '--card-padding': '1rem',
} as const;

export const animations = {
  duration: {
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
  },
  ease: {
    default: 'easeOut',
    inOut: 'easeInOut',
    in: 'easeIn',
  },
};
