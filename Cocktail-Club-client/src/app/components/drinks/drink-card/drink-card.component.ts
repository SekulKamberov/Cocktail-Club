import { Component, Input } from '@angular/core'

import { DrinkModel } from '../models/DrinkModel'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { AddToCart } from '../../../core/store/cart/cart.actions'
import { AppState } from '../../../core/store/app.state'
import { CartDrinkModel } from '../../../core/models/CartDrinkModel'
import { DrinkDeleteModalComponent } from '../drink-delete-modal/drink-delete-modal.component'

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})

export class DrinkCardComponent {

  @Input() public drink: DrinkModel

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private store: Store<AppState>,
    private modalService: NgbModal
  ) { }

  addToCart() {

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/cart'])
      return
    }

    const drinkToAdd = new CartDrinkModel(
      this.drink._id,
      this.drink.name,
      1,
      this.drink.price)

      this.store.dispatch(new AddToCart(drinkToAdd))
      this.router.navigate(['/cart'])
  }

  openDeleteDrinkModal() {
    const deleteRef = this.modalService.open(DrinkDeleteModalComponent)
    deleteRef.componentInstance.drinkId = this.drink._id
    deleteRef.result.then((result) => {
    }).catch((error) => {
    })

  }




}
