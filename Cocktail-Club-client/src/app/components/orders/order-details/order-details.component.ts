import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { BaseComponent } from '../../base.component'
import { toLocaleString } from '../../../core/utils/helperFunctions'
import { OrderModel } from '../models/OrderModel'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { AppState } from '../../../core/store/app.state'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent extends BaseComponent implements OnInit {
  protected toLocaleString = toLocaleString
  protected notFoundMessage = 'ORDER NOT FOUND'
  public order: OrderModel
  private id: string
  private subscription$: Subscription


  constructor(
    protected authService: AuthenticationService,
    private store: Store<AppState>,
    private route: ActivatedRoute) {
      super()
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.subscription$ = this.store
      .pipe(select(state => state.orders))
        .subscribe(orders => {
          if (orders.userOrders.length > 0) {
            this.order = orders.userOrders.find(o => o._id === this.id)
          } else {
            if (orders.pendingOrders.length > 0) {
              this.order = orders.pendingOrders.find(o => o._id === this.id)
            }

            if (!this.order && orders.approvedOrders.length > 0) {
              this.order = orders.approvedOrders.find(o => o._id === this.id)
            }
          }
        })

    this.subscriptions.push(this.subscription$)
  }
}
