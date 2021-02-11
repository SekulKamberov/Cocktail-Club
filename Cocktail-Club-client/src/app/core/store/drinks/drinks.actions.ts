import { Action } from '@ngrx/store'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'

export const GET_ALL = '[DRINKS] GET_ALL'
export const CREATE_DRINK = '[DRINKS] CREATE'

export class GetAllDrinks implements Action {
  readonly type: string = GET_ALL

  constructor (public payload: DrinkModel[]) { }
}

export class CreateDrink implements Action {
  readonly type: string = CREATE_DRINK

  constructor (public payload: DrinkModel) { }
}
