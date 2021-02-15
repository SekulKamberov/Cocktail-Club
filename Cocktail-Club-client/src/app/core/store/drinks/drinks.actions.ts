import { Action } from '@ngrx/store'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'

export const GET_ALL = '[DRINKS] GET_ALL'
export const CREATE_DRINK = '[DRINKS] CREATE'

export const LIKE_DRINK = '[DRINKS] LIKE'
export const UNLIKE_DRINK = '[DRINKS] UNLIKE'

export const EDIT_DRINK = '[DRINKS] EDIT'

export class GetAllDrinks implements Action {
  readonly type: string = GET_ALL

  constructor (public payload: DrinkModel[]) { }
}

export class CreateDrink implements Action {
  readonly type: string = CREATE_DRINK

  constructor (public payload: DrinkModel) { }
}

export class UnlikeDrink implements Action {
  readonly type: string = UNLIKE_DRINK

  constructor (public id: string, public username: string) { }
}

export class LikeDrink implements Action {
  readonly type: string = LIKE_DRINK

  constructor (public id: string, public username: string) { }
}

export class EditDrink implements Action {
  readonly type: string = EDIT_DRINK

  constructor (public payload: DrinkModel) { }
}


