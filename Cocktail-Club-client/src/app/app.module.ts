import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxSpinnerModule } from 'ngx-spinner'

import { AppRoutingModule } from './app-routing'
import { AppComponent } from './app.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'  
import { HomeComponent } from './components/home/home.component'
import { MenuComponent } from './components/menu/menu.component'

import { ServicesModule } from './core/services/services.module'
import { AuthenticationModule } from './components/authentication/authentication.module'
import { StoreModule, ActionReducer } from '@ngrx/store'
import { appReducers } from './core/store/app.reducers'
import { JWTInterceptor, ErrorInterceptor } from './core/interceptors'
import { ToastrModule } from 'ngx-toastr'
import { SharedModule } from './components/shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    AuthenticationModule,
    ServicesModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
