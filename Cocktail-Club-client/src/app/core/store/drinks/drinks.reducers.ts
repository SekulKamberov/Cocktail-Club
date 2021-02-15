import { CREATE_DRINK, GET_ALL, LIKE_DRINK, UNLIKE_DRINK, EDIT_DRINK } from './drinks.actions'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'
import { DrinksState } from './drinks.state'

import { produce } from 'immer';

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

function likeDrink(state: DrinksState, id: string, username: string) {
  const nextState = produce(state, draft => {
    draft.all.find(d => d._id === id).likes.push(username)
  })

  return Object.assign({}, state, {
    all: nextState.all.slice()
  })
}

function unlikeDrink(state: DrinksState, id: string, username: string) {
  const nextState = produce(state, draft => {
      let indexDel = state.all.find(d => d._id === id).likes.indexOf(username);

    draft.all.find(d => d._id === id).likes.splice(indexDel, 1)
  })

  return Object.assign({}, state, {
    all: nextState.all.slice()
  })
}

function editDrink(state: DrinksState, drink: DrinkModel) {
  return Object.assign({}, state, {
    all: [...state.all.filter(d => d._id !== drink._id), drink]
  })
}

export function drinksReducer (state: DrinksState = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return getAllDrinks(state, action.payload)
      case CREATE_DRINK:
        return addDrink(state, action.payload)
      case LIKE_DRINK:
        return likeDrink(state, action.id, action.username)
      case UNLIKE_DRINK:
        return unlikeDrink(state, action.id, action.username)
      case EDIT_DRINK:
        return editDrink(state, action.payload)
    default:
      return state
  }
}
