import { GET_ALL } from './drinks.actions'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'
import { DrinksState } from './drinks.state'

const initialState: DrinksState = {
  all: []
}

function getAllDrinks(state: DrinksState, drinks: DrinkModel[]) {
  return Object.assign({}, state, {
    all: drinks
  })
}



export function drinksReducer (state: DrinksState = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return getAllDrinks(state, action.payload)
    default:
      return state
  }
}
