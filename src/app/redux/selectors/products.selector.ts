import { createSelector } from '@ngrx/store';
 
export interface Product {
  product: object;
}
 
export interface ProductState {
  item: Product;
}
 
export const selectProduct = (state: ProductState) => state.item;
 
export const selectProductActual = createSelector(
  selectProduct,
  (state: Product) => state.product
);