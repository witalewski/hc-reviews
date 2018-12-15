export const getNextId = (label, ids) =>
  `${label}${
    ids.length ? parseInt(ids[ids.length - 1].match(/\d+/)[0]) + 1 : 1
  }`;
