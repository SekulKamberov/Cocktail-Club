import { Component, Input } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { DrinkModel } from '../models/DrinkModel'

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})

export class DrinkCardComponent {

  @Input() public drink: DrinkModel

  constructor() { }

}
