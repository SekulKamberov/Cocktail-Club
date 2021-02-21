import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { AppState } from '../../../core/store/app.state'

import CustomValidators from '../../../core/utils/customValidators'
import { DrinksService } from '../../../core/services/drinks/drinks.service'
import { BaseComponent } from '../../base.component'
import { DrinkModel } from '../../drinks/models/DrinkModel'

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.scss']
})
export class EditDrinkComponent extends BaseComponent implements OnInit {
  protected editForm
  protected notFoundMessage = 'DRINK NOT FOUND'
  public drink: DrinkModel
  private id: string
  private subscription$: Subscription


  constructor(
    private fb: FormBuilder,
    private drinksService: DrinksService,
    private route: ActivatedRoute,
    private store: Store<AppState>) {
      super()
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.subscription$ = this.store
    .pipe(select(state => state.drinks.all))
    .subscribe(drinks => {
      this.drink = drinks.find(p => p._id === this.id)
    })

    this.subscriptions.push(this.subscription$)

    this.createForm()
  }

  createForm() {
    if (this.drink) {
      this.editForm = this.fb.group({
        name: [this.drink.name, [Validators.required, Validators.minLength(3)]],
        ingredients: [this.drink.ingredients.join(','), [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.noSpaceAfterComma.bind(this),
          CustomValidators.noCommaAtTheEnd.bind(this)]
        ],
        ingredientsInfo: [this.drink.ingredientsInfo.join(','), [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.noSpaceAfterComma.bind(this),
          CustomValidators.noCommaAtTheEnd.bind(this)]
        ],
        description: [this.drink.description, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
        image: [this.drink.image, [
          Validators.required,
          Validators.minLength(14),
          Validators.pattern('^(http|https):\/\/[a-zA-Z0-9]+.*$')]
        ],
        weight: [this.drink.weight, [Validators.required, Validators.min(250), Validators.max(800)]],
        price: [this.drink.price.toFixed(2), [Validators.required, Validators.min(0)]]
      })
    }
  }

  edit() {
    if (this.editForm.invalid) {
      return
    }

    const drink: DrinkModel = Object.assign({}, this.drink, this.editForm.value)
    this.drinksService.editDrink(drink)
  }

  get name () {
    return this.editForm.get('name')
  }

  get ingredients () {
    return this.editForm.get('ingredients')
  }

  get ingredientsInfo () {
    return this.editForm.get('ingredientsInfo')
  }

  get description () {
    return this.editForm.get('description')
  }

  get image () {
    return this.editForm.get('image')
  }

  get weight () {
    return this.editForm.get('weight')
  }

  get price () {
    return this.editForm.get('price')
  }
}
