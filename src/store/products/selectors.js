export const getProductsSelector = state => state.products.data;
export const getOneProductSelector = state => state.products.product;
export const productsLoadingSelector = state => state.products.isLoading;
export const oneProductLoadingSelector = state => state.products.productLoading;
