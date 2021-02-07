import { GET_REQUEST_BEGIN, GET_REQUEST_END, UNDO_ORDERS_REQUEST } from './http.actions'
import { HttpState } from './http.state'  

const initialState = {
  currentGetCalls: 0,
  ordersRequestMade: false
}

export function httpReducer(state: HttpState = initialState, action) {
  switch (action.type) {
    case GET_REQUEST_BEGIN:
      return Object.assign({}, state, {
        currentGetCalls: state.currentGetCalls + 1
      })
    case GET_REQUEST_END:
      return Object.assign({}, state, {
        currentGetCalls: state.currentGetCalls - 1
      })
    default:
      return state  
  }
}