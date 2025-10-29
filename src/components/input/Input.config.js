const defaultSize = {
  sm: 'text-sm px-2 rounded',
  md: 'px-2.5 rounded-md',
};

export default {
  sizes: {
    input: {
      sm: `${defaultSize.sm} h-8`,
      md: `${defaultSize.md} h-10`,
    },
    textarea: {
      sm: `${defaultSize.sm} min-h-8 py-2`,
      md: `${defaultSize.md} min-h-10 py-2`,
    },
  },
};
