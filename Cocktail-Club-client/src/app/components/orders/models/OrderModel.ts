import { OrderDrinkModel } from './OrderDrinkModel'

export class OrderModel {
  _id: string
  creator: string
  creatorEmail: string
  cocktails: OrderDrinkModel[]
  date: Date
  status: string
  amount: number

  //get amount(): number {
    //return this.drinks.reduce((prev, cur) => prev += cur.price * cur.quantity, 0)
  //}
}


