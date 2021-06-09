export const replace = num => {
  const str = num.toString();
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
};

export const calculateTotalPrice = cart => {
  let totalPrice = 0;
  cart?.products.map(p => {
    totalPrice += p.cartQuantity * p.currentPrice;
    return totalPrice;
  });

  return totalPrice;
};

export const getDate = date => {
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const dateStr = new Date(date).toLocaleString('ru', optionsDate);
  return dateStr;
};
