import { authenticationReducer } from './authentication/authentication.reducers'
import { httpReducer } from './http/http.reducers'
import { drinksReducer } from './drinks/drinks.reducers'
import { cartReducer } from './cart/cart.reducers'
import { ordersReducer } from './orders/orders.reducers'

export const appReducers = {
  authentication: authenticationReducer,
  http: httpReducer,
  drinks: drinksReducer,
  cart: cartReducer,
  orders: ordersReducer
}
