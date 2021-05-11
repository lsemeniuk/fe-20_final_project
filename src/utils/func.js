export const replace = num => {
  const str = num.toString();
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
};

export const calculateTotalPrice = cart => {
  let totalPrice = 0;
  if (cart) {
    cart.products.map(p => {
      totalPrice += p.cartQuantity * p.product.currentPrice;
      return totalPrice;
    });
  }

  return replace(totalPrice);
};
