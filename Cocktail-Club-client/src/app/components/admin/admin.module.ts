import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner'
import { SharedModule } from '../shared/shared.module'

import { adminComponents } from '.'
import { NgxPaginationModule } from '../../../../node_modules/ngx-pagination'
import { AdminRoutingModule } from './admin.routing'

@NgModule({
  declarations: [
    ...adminComponents
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedModule,
    NgxPaginationModule

  ]
})
export class AdminModule { }
