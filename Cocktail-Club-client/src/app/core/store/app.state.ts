import { AuthenticationState } from './authentication/authentication.state'
import { HttpState } from './http/http.state'
import { DrinksState } from './drinks/drinks.state'
import { CartState } from './cart/cart.state'

export interface AppState {
  authentication: AuthenticationState
  http: HttpState
  drinks: DrinksState
  cart: CartState
}
