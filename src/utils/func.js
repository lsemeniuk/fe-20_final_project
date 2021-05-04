export const replace = num => {
  const str = num.toString();
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
};
export const lockBody = () => {};
