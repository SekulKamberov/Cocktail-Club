import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { AppState } from '../../../core/store/app.state'
import { BaseComponent } from '../../base.component'
import { DrinkModel } from '../models/DrinkModel'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent extends BaseComponent implements OnInit {
  protected id: string
  protected notFoundMessage = 'Drink NOT FOUND'
  public drink: DrinkModel
  private subscription$: Subscription

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>) {
      super()
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.subscription$ = this.store
    .pipe(select(state => state.drinks.all))
    .subscribe(data => {
      if (data.length > 0) {
        this.drink = data.find(p => p._id === this.id)
      }
    })

    this.subscriptions.push(this.subscription$)
  }


}
