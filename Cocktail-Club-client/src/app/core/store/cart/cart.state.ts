import { CartDrinkModel } from '../../models/CartDrinkModel'

export interface CartState {
  readonly drinks: CartDrinkModel[]
}
