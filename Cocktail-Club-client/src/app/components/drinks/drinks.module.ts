import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgxPaginationModule } from 'ngx-pagination'

import { FontAwesomeModule } from '../../../../node_modules/@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { SharedModule } from '../shared/shared.module'

import { drinkComponents } from '.'

@NgModule({
  declarations: [...drinkComponents],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],  
  exports: [
    ...drinkComponents
  ]
})
export class DrinksModule { }
