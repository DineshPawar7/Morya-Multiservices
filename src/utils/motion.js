export const navVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.3,
    },
  },
};

export const textVariant = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.8, delay } },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "tween", delay, duration, ease: "easeOut" } },
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const cardHover = {
  scale: 1.05,
  boxShadow: "0px 15px 25px rgba(0,0,0,0.15)",
  transition: { type: 'spring', stiffness: 400, damping: 10 }
};

export const buttonHover = {
  scale: 1.05,
  transition: { type: 'spring', stiffness: 400, damping: 10 }
};

export const tapEffect = {
  scale: 0.95
};