import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from '../../../core/store/app.state'
import { BaseComponent } from '../../base.component'
import { toLocaleString } from '../../../core/utils/helperFunctions'
import { OrderModel } from '../models/OrderModel'
import { OrdersService } from '../../../core/services/orders/orders.service'


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})

export class UserOrdersComponent extends BaseComponent implements OnInit {
  public pageSize: number = 5
  public currentPage: number = 1
  public notFoundMessage = 'You have not made any orders'
  public toLocaleString = toLocaleString
  public orders: OrderModel[]
  private subscription$: Subscription

  constructor(
    private store: Store<AppState>,
    private ordersService: OrdersService) {
      super()
    }

  ngOnInit() {
    this.ordersService.getUserOrders()
    this.subscription$ = this.store
      .pipe(select(state => state))
        .subscribe(state => {
          if (state.http.ordersRequestMade) {
            this.orders = state.orders.userOrders
              .sort((a: OrderModel, b: OrderModel) => +new Date(b.date) - +new Date(a.date))
          }
        })

    this.subscriptions.push(this.subscription$)
  }

  changePage (page) {
    this.currentPage = page
  }

  trackByIds(index: number, order: OrderModel): string {
    return order._id
  }
}
