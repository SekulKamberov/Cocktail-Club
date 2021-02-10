import { Component, Input } from '@angular/core';
import { DrinkModel } from '../models/DrinkModel'

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent {
  @Input() public drink: DrinkModel
  constructor() { }


}
