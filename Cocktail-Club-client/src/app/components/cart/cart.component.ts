import { Component, OnInit } from '@angular/core'

import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { BaseComponent } from '../base.component'
import { animations } from './cart.animations'
import { DrinkInCartModel } from './models/DrinkInCartModel'
import { SyncCart, RemoveFromCart } from '../../core/store/cart/cart.actions'
import { AppState } from '../../core/store/app.state'
import { OrdersService } from '../../core/services/orders/orders.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: animations
})

export class CartComponent extends BaseComponent implements OnInit {
  public drinks: DrinkInCartModel[]
  public totalSum: number
  private subscription$: Subscription

  constructor(
    private store: Store<AppState>,
    private ordersService: OrdersService) {
    super()
  }

  ngOnInit() {
    this.subscription$ = this.store.pipe(select(state => state))
    .subscribe(state => {
      const drinks = state.drinks.all
      const cartDrinksIds = state.cart.drinks.map(d => d.drinkId)
      const drinksInCart = drinks.filter(d => cartDrinksIds.includes(d._id))

      let total = 0
      const allDrinks: DrinkInCartModel[] = []

      for(const dr of drinksInCart) {
        const drink = new DrinkInCartModel()
        drink._id = dr._id
        drink.image = dr.image
        drink.ingredients = dr.ingredients
        drink.name = dr.name
        drink.price = dr.price
        drink.quantity = state.cart.drinks.find(d => d.drinkId === dr._id).quantity
        total += drink.quantity * drink.price
        allDrinks.push(drink)
      }

      this.drinks = allDrinks
      this.totalSum = total

    })

    this.subscriptions.push(this.subscription$)
  }

  onQuantChange(event, id) {
    const inputValue = event.target.value
    if (!isNaN(inputValue) && parseInt(inputValue, 10) >= 1) {
      this.store.dispatch(new SyncCart(id, parseInt(inputValue, 10)))
    } else {
      this.store.dispatch(new SyncCart(id, 1))
    }
  }

  onRefreshButtonClick(id) {
    this.store.dispatch(new SyncCart(id, 1))
  }

  onDeleteButtonClick(id) {
    this.store.dispatch(new RemoveFromCart(id))
  }

  onCheckoutButtonClick() {
    const drinks = []
    for (const dr of this.drinks) {
      drinks.push({
        id: dr._id,
        name: dr.name,
        quantity: dr.quantity,
        price: dr.price
      })
    }
    this.ordersService.submitNewOrder(drinks)
  }

  trackByIds(index: number, drink: DrinkInCartModel): string {
    return drink._id
  }

}
