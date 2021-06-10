export const getCartSelector = state => state.cart.data;
export const getLocalCartSelector = state => state.cart.localCart;
export const cartLoadingSelector = state => state.cart.isLoading;
export const cartTotalPriceSelector = state => state.cart.totalPrice;
export const deliveryMethodSelector = state => state.cart.deliveryMethod;
