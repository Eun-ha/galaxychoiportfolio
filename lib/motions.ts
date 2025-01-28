export const effectsY = {
  offscreen: (index: number) => ({
    opacity: 0,
    y: index * 3,
  }),
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "linear",
      duration: 0.8,
    },
  },
};

export const effectsX = {
  offscreen: (index: number) => ({
    opacity: 0,
    x: index,
  }),
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "linear",
      duration: 0.8,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "linear",
      staggerChildren: 0.2,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
