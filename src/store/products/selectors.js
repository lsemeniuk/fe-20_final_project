export const getProductsSelector = state => state.products.allProducts;

export const getProductsFilteredSelector = state => state.products.filterProducts;

export const getOneProductSelector = state => state.products.product;

export const getProductsFilterSelector = state => state.products.productsFilter;

export const getProductsQuantitySelector = state => state.products.productsQuantity;

export const productsLoadingSelector = state => state.products.isLoading;

export const oneProductLoadingSelector = state => state.products.productLoading;
