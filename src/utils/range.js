export const range = (start, end) =>
  start === end ? [start] : [start, ...range(start + 1, end)];
