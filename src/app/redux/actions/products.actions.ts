import { Action } from '@ngrx/store';

export enum ProductsActionType {
  FetchProduct = '[Product] Fetch',
  PutProduct = '[Product] Put',
  FetchProducts = '[Products] Fetch',
  PutProducts = '[Products] Put'
}

export class FetchProduct implements Action {
  readonly type = ProductsActionType.FetchProduct
  constructor(public payload: number) {}
} 

export class PutProduct implements Action {
  readonly type = ProductsActionType.PutProduct
  constructor(public payload: any) {}
}

export class FetchProducts implements Action {
  readonly type = ProductsActionType.FetchProducts
  constructor() {}
} 

export class PutProducts implements Action {
  readonly type = ProductsActionType.PutProducts
  constructor(public payload: any) {}
}

export type ProductsActions = FetchProduct | PutProduct | FetchProducts | PutProducts