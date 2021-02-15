import { Component, Input } from '@angular/core';
import { DrinkModel } from '../models/DrinkModel'

import { DrinksService } from '../../../core/services/drinks/drinks.service'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service'

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent {
  @Input() public drink: DrinkModel
  constructor(
    private drinksService: DrinksService,
    protected authService: AuthenticationService
  ) { }

  onLikeButtonClick() {
    this.drinksService.likeDrink(this.drink._id, this.authService.getUsername())
  }

  onUnlikeButtonClick() {
    this.drinksService.unlikeDrink(this.drink._id, this.authService.getUsername())
  }

}
