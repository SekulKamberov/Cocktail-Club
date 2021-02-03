import jwt_decode from "jwt-decode"; 
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

import { LoginModel } from '../../../components/authentication/models/LoginModel'
import { RegisterModel } from '../../../components/authentication/models/RegisterModel'
import { AppState } from '../../store/app.state'
import { Store, select } from '@ngrx/store'

import { Authenticate, Deauthenticate } from '../../store/authentication/authentication.actions'
import AuthenticationDataModel from '../../models/AuthenticationDataModel'


const loginUrl = 'http://localhost:5000/auth/login'
const registerUrl = 'http://localhost:5000/auth/signup'

@Injectable()
export class AuthenticationService {
  private username: string
  private isUserAdmin: boolean
  private isUserAuthenticated: boolean

  constructor (private http: HttpClient,
    private toastr: ToastrService,
    private store: Store<AppState>,
    private router: Router) {
        this.store.pipe(select(state => state.authentication.isAdmin))
        .subscribe(data => this.isUserAdmin = data)
      this.store.pipe(select(state => state.authentication.isAuthenticated))
        .subscribe(data => this.isUserAuthenticated = data)
      this.store.pipe(select(state => state.authentication.username))
        .subscribe(data => this.username = data)

        if (localStorage.getItem('authtoken')) {
            const authtoken = localStorage.getItem('authtoken')
            try {
              const decoded = jwt_decode<any>(authtoken)
              if (!this.isTokenExpired(decoded)) {
                const authData = new AuthenticationDataModel(authtoken, decoded.username, decoded.isAdmin, true)
                this.store.dispatch(new Authenticate(authData))
              }
            } catch (err) {
              this.toastr.error('Invalid token', 'Warning!')
            }
          }
    }

  register(body: RegisterModel) {
    return this.http.post(registerUrl, body)
  }

  login(body: LoginModel) {
    return this.http.post(loginUrl, body)
  }

  logout() {
    localStorage.clear()
    this.store.dispatch(new Deauthenticate())
    this.toastr.success('Logout successful!')
    this.router.navigate(['/'])
  }
  
  isAuthenticated () {
    return this.isUserAuthenticated
  }

  isAdmin () {
    return this.isUserAdmin
  }

  getUsername () {
    return this.username
  }

  private isTokenExpired(token): boolean {
    if (token.exp === undefined) {
      return false
    }

    const date = new Date(0)
    date.setUTCSeconds(token.exp)

    return !(date.valueOf() > new Date().valueOf())
  }
}
