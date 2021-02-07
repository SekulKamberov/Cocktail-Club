import { Action } from '@ngrx/store'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel' 

export const GET_ALL = '[DRINKS] GET_ALL' 

export class GetAllDrinks implements Action {
  readonly type: string = GET_ALL

  constructor (public payload: DrinkModel[]) { }
}

