import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1A0A00',
        dark: '#0D0500',
        brown: '#8B5E3C',
        caramel: '#C4956A',
        sand: '#D9B896',
        cream: '#F5EFE6',
        white: '#FFFFFF',
        sale: '#e05c3a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        label: ['var(--font-label)', 'Impact', 'sans-serif'],
      },
      animation: {
        mq: 'mq 22s linear infinite',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)',
        back: 'cubic-bezier(.34,1.56,.64,1)',
      },
    },
  },
  plugins: [],
}

export default config
