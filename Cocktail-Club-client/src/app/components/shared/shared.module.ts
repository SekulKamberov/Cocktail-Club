import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { sharedComponents } from '.';
import { NotFoundComponent } from './not-found/not-found.component';
import { AmountPipe } from './amount.pipe'

@NgModule({
  declarations: [
    ...sharedComponents,
    //NotFoundComponent,
    AmountPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    ...sharedComponents, AmountPipe
  ]
})
export class SharedModule { }
