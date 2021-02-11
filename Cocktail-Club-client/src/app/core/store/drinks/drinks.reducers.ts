import { CREATE_DRINK, GET_ALL } from './drinks.actions'
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

function addDrink(state: DrinksState, drink: DrinkModel) {
  return Object.assign({}, state, {
    all: [...state.all, drink]
  })
}

export function drinksReducer (state: DrinksState = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return getAllDrinks(state, action.payload)
      case CREATE_DRINK:
        return addDrink(state, action.payload)
    default:
      return state
  }
}
