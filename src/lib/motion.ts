export const viewport = { once: true, margin: "-60px" } as const;

export const transition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};
