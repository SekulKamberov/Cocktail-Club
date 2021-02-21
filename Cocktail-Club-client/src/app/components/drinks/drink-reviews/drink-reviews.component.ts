import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

import { ReviewModel } from '../models/ReviewModel'

import { AuthenticationService } from '../../../core/services/authentication/authentication.service'
import { DrinksService } from '../../../core/services/drinks/drinks.service'
import { toLocaleString } from '../../../core/utils/helperFunctions'

@Component({
  selector: 'app-drink-reviews',
  templateUrl: './drink-reviews.component.html',
  styleUrls: ['./drink-reviews.component.scss']
})
export class DrinkReviewsComponent {
  public reviewForm
  public toLocaleString = toLocaleString
  @Input() public reviews: ReviewModel[]
  @Input() private id: string


  constructor(
    protected formBuilder: FormBuilder,
    protected authService: AuthenticationService,
    private drinksService: DrinksService
  ) {
    this.createForm()
  }

  get review() { return this.reviewForm.get('review') }

  submitForm() {
    if (this.reviewForm.invalid) {
      return
    }

    const formValue = this.reviewForm.value
    this.drinksService.addDrinkReview(formValue, this.id)
    this.reviewForm.reset()
  }

  private createForm() {
    this.reviewForm = this.formBuilder.group({
      review: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
