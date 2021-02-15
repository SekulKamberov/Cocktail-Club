import { Component, Input } from '@angular/core'

import { DrinkModel } from '../models/DrinkModel'
import { AuthenticationService } from '../../../core/services/authentication/authentication.service'

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})

export class DrinkCardComponent {

  @Input() public drink: DrinkModel

  constructor(
    public authService: AuthenticationService
  ) { }

}
