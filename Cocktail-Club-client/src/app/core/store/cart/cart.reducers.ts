import { ADD_TO_CART, SYNC_CART, REMOVE_FROM_CART, CLEAR_CART  } from './cart.actions'
import { CartState } from './cart.state'

import { DEAUTHENTICATE } from '../authentication/authentication.actions'
import { CartDrinkModel } from '../../models/CartDrinkModel'

import { produce } from 'immer'

const initialState: CartState = {
  drinks: []
}

function addToCart(state: CartState, drink: CartDrinkModel) {

  if(state.drinks.find(d => d.drinkId === drink.drinkId)) {
    const newDrinks = state.drinks.slice()
    const cartDrink = newDrinks.find(d => d.drinkId === drink.drinkId)
    cartDrink.quantity += 1

    return Object.assign({}, state, {
      drinks: newDrinks
    })
  }

  return Object.assign({}, state, {
    drinks: [...state.drinks, drink]
  })

}

function syncCart(state: CartState, id: string, quantity: number) {
  /**/
  const newDrinks = state.drinks.slice()
  const cartDrink = newDrinks.find(d => d.drinkId === id)
  cartDrink.quantity = quantity

  return Object.assign({}, state, {
    drinks: newDrinks
  })
}
  /*
  const nextState = produce(state, draft => {
    draft.drinks.filter(ops => {

     if (ops.drinkId === id) {
       return {...ops, quantity: quantity}
     }
     else return ops

   })
 })
} */

function removeFromCart (state: CartState, id: string) {
  return Object.assign({}, state, {
    drinks: state.drinks.filter(d => d.drinkId !== id)
  })
}

function clearCart (state) {
  return Object.assign({}, state, {
    drinks: []
  })
}

export function cartReducer (state: CartState = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload)
    case SYNC_CART:
      return syncCart(state, action.id, action.quantity)
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.id)
    case CLEAR_CART:
      case DEAUTHENTICATE:
        return clearCart(state)
    default:
      return state
  }
}





