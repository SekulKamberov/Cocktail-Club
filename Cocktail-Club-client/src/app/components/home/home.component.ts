import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Subscription } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { AppState } from '../../core/store/app.state'

import { BaseComponent } from '../base.component'
import { AuthenticationService } from '../../core/services/authentication/authentication.service'
import { DrinksService } from '../../core/services/drinks/drinks.service'
import { DrinkModel } from '../drinks/models/DrinkModel'
import { RegisterModalComponent } from '../authentication/register-modal/register-modal.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  public drinks: DrinkModel[]
  private subscription$: Subscription

  constructor(
    public authService: AuthenticationService,
    public drinksService: DrinksService,
    private store: Store<AppState>,
    private modalService: NgbModal) {
      super()
  }

  ngOnInit() {
    this.drinksService.getAllDrinks()
    this.subscription$ = this.store
      .pipe(select(state => state.drinks.all))
      .subscribe(drinks => {
        this.drinks = [...drinks]
        .sort((a, b) => Number(b.price) - Number(a.price)) //TODO: by likes later
        .slice(0, 10)
      })

      this.subscriptions.push(this.subscription$)
  }
  openRegisterModal() {
    const registerRef = this.modalService.open(RegisterModalComponent)
    registerRef.result.then((result) => {
    }).catch((error) => {
    })
  }
}
