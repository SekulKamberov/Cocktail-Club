import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../../core/store/app.state'
import { animations } from './pending-orders.animation'
import { BaseComponent } from '../../base.component'
import { toLocaleString } from '../../../core/utils/helperFunctions'
import { OrderModel } from '../../orders/models/OrderModel'
import { OrdersService } from '../../../core/services/orders/orders.service'
import { UndoOrdersRequestMade } from '../../../core/store/http/http.actions'

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
  animations: animations
})

export class PendingOrdersComponent  extends BaseComponent  implements OnInit, OnDestroy  {
  public pageSize: number = 5
  public currentPage: number = 1
  public notFoundMessage = 'There are no pending orders at the moment.'
  public toLocaleString = toLocaleString
  public pendingOrders: OrderModel[]
  private subscription$: Subscription

  constructor(
    private store: Store<AppState>,
    private ordersService: OrdersService) {
      super()
    }

  ngOnInit() {
    this.store.dispatch(new UndoOrdersRequestMade())
    this.ordersService.getPendingOrders()
    this.subscription$ = this.store
      .pipe(select(state => state))
        .subscribe(state => {
          if (state.http.ordersRequestMade) {
            this.pendingOrders = state.orders.pendingOrders
            .sort((a: OrderModel, b: OrderModel) => +new Date(b.date) - +new Date(a.date))
          }

        })

    this.subscriptions.push(this.subscription$)
  }

  approve(id: string) {
    const order = this.pendingOrders.find(o => o._id === id)
    this.ordersService.approveOrder(id)
  }

  trackByIds(index: number, order: OrderModel): string {
    return order._id
  }
}
