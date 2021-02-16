import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { AppState } from '../../core/store/app.state'

import { BaseComponent } from '../base.component'
import { DrinkModel } from '../drinks/models/DrinkModel'
import { DrinksService } from '../../core/services/drinks/drinks.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends  BaseComponent implements OnInit {
  public drinksToView: DrinkModel[]
  private drinks: DrinkModel[]
  private subscription$: Subscription
  private seacrhTerm: string = ''

  constructor(
    private drinksService: DrinksService,
    private store: Store<AppState>
  ) {
    super()
  }

  ngOnInit() {
    this.drinksService.getAllDrinks()
    this.subscription$ = this.store
    .pipe(select(state => state.drinks.all))
    .subscribe(drinks => {
      this.drinks = drinks
      this.drinksToView = this.drinks
      .filter(p => p.name.toLowerCase()
      .includes(this.seacrhTerm.toLowerCase()))
    })

    this.subscriptions.push(this.subscription$)

  }

  searchChange(event) {
    this.seacrhTerm = event.target.value
    this.drinksToView = this.drinks
    .filter(p => p.name.toLowerCase()
    .includes(this.seacrhTerm.toLowerCase()))
  }
}
