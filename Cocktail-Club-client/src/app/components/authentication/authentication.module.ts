import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common' 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner'

import { authenticationComponents } from '.'


@NgModule({
  declarations: [  
     ...authenticationComponents],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    ...authenticationComponents
  ],
  entryComponents: [
    ...authenticationComponents
  ]
})
export class AuthenticationModule { }
