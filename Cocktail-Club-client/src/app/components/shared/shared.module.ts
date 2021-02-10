import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { sharedComponents } from '.';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    ...sharedComponents,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
