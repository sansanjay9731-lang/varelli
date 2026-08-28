export const ease = {
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  out: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOut: [0.45, 0, 0.55, 1] as [number, number, number, number],
};

export const duration = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.smooth },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.smooth },
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: duration.slow, ease: ease.smooth },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.base, ease: ease.smooth },
  },
};
