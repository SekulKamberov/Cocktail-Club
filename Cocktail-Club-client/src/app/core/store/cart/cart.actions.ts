import { Action } from '@ngrx/store'
import { CartDrinkModel } from '../../models/CartDrinkModel'

export const ADD_TO_CART = '[CART] ADD'
export const SYNC_CART = '[CART] SYNC'
export const CLEAR_CART = '[CART] CLEAR'
export const REMOVE_FROM_CART = '[CART] REMOVE'

export class AddToCart implements Action {
  readonly type: string = ADD_TO_CART
  constructor (public payload: CartDrinkModel) { }
}

export class SyncCart implements Action {
  readonly type: string = SYNC_CART
  constructor (public id: string, public quantity: number) { }
}

export class RemoveFromCart implements Action {
  readonly type: string = REMOVE_FROM_CART
  constructor (public id: string) { }
}

export class ClearCart implements Action {
  readonly type: string = CLEAR_CART
}
