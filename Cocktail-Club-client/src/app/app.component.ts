import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Store, select } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AppState } from './core/store/app.state'
import { AuthenticationService } from './core/services/authentication/authentication.service'
import { BaseComponent } from './components/base.component' 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit {
  protected getCalls: number
  private subscription$: Subscription

  constructor (
    private spinner: NgxSpinnerService, 
    private authService: AuthenticationService, 
    private store: Store<AppState>) {
      super()
  }

  ngOnInit () { 
 
  }
}
