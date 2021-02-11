import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

import { CreateDrinkModel } from '../models/CreateDrinkModel'
import CustomValidators from '../../../core/utils/customValidators'
import { DrinksService } from '../../../core/services/drinks/drinks.service'

@Component({
  selector: 'app-create-drink',
  templateUrl: './create-drink.component.html',
  styleUrls: ['./create-drink.component.scss']
})

export class CreateDrinkComponent implements OnInit {
  createForm

  constructor(
    private fb: FormBuilder,
    private drinksService: DrinksService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      recipeBy:  ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(290)]],
      image: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^(http|https):\/\/[a-zA-Z0-9]+.*$')]],
      price: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(250), Validators.max(800)]],
      ingredients: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),//TODO! SERVER Validation drinc.js not exist for maxlength
        CustomValidators.noSpaceAfterComma.bind(this),
        CustomValidators.noCommaAtTheEnd.bind(this)]
      ],
      ingredientsInfo: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50), //TODO! SERVER Validation drinc.js not exist for maxlength
        CustomValidators.noSpaceAfterComma.bind(this),
        CustomValidators.noCommaAtTheEnd.bind(this)]
      ]
    })
  }

  create() {

    if (this.createForm.invalid) {
      return
    }

    const drink: CreateDrinkModel = Object.assign({}, this.createForm.value)
    this.drinksService.createDrink(drink)
  }

  get name () {
    return this.createForm.get('name')
  }

  get recipeBy () {
    return this.createForm.get('recipeBy')
  }

  get description () {
    return this.createForm.get('description')
  }

  get image () {
    return this.createForm.get('image')
  }

  get price () {
    return this.createForm.get('price')
  }

  get weight () {
    return this.createForm.get('weight')
  }

  get ingredients () {
    return this.createForm.get('ingredients')
  }

  get ingredientsInfo () {
    return this.createForm.get('ingredientsInfo')
  }

}
