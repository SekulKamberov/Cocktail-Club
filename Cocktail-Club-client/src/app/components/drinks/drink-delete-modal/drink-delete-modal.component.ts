import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import { DrinksService } from '../../../core/services/drinks/drinks.service'

@Component({
  selector: 'app-drink-delete-modal',
  templateUrl: './drink-delete-modal.component.html',
  styleUrls: ['./drink-delete-modal.component.scss']
})
export class DrinkDeleteModalComponent {
  public faWindowClose = faWindowClose
  @Input() private drinkId: string

  constructor(
    public activeModal: NgbActiveModal,
    private drinksService: DrinksService
  ) { }

  delete() {
    this.drinksService.deleteDrink(this.drinkId, this.activeModal)
  }

}
