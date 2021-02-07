import { authenticationReducer } from './authentication/authentication.reducers' 
import { httpReducer } from './http/http.reducers' 
import { drinksReducer } from './drinks/drinks.reducers'

export const appReducers = {
  authentication: authenticationReducer,
  http: httpReducer,
  drinks: drinksReducer 
}
