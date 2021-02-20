import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxPaginationModule } from 'ngx-pagination'

import { FontAwesomeModule } from '../../../../node_modules/@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

import { drinkComponents } from '.';
import { DetailsPageComponent } from './details-page/details-page.component'
import { RouterModule } from '@angular/router';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { DrinkDeleteModalComponent } from './drink-delete-modal/drink-delete-modal.component'


@NgModule({
  declarations: [...drinkComponents, DetailsPageComponent, DrinkDetailsComponent, DrinkDeleteModalComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ...drinkComponents
  ]
})
export class DrinksModule { }
