/**
 * Corporate Trust — design tokens for the Tailwind Play CDN.
 * Indigo (#4F46E5) + Violet (#7C3AED) are Tailwind's indigo-600 / violet-600,
 * so we only extend the brand-specific pieces: the display font, the
 * colored-shadow scale, and the gentle float animation.
 */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Semantic aliases that map onto the design-system tokens.
        ink: '#0F172A', // Text Main  (slate-900)
        muted: '#64748B', // Text Muted (slate-500)
      },
      letterSpacing: {
        headline: '-0.02em', // tight tracking on large headlines
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(79, 70, 229, 0.10)',
        cardhover:
          '0 10px 25px -5px rgba(79, 70, 229, 0.15), 0 8px 10px -6px rgba(79, 70, 229, 0.10)',
        button: '0 4px 14px 0 rgba(79, 70, 229, 0.30)',
        glow: '0 0 20px rgba(79, 70, 229, 0.50)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
};
