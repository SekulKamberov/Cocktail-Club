import jwt_decode from 'jwt-decode'
import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'

import { AppState } from '../store/app.state'
import AuthenticationDataModel from '../models/AuthenticationDataModel'
import { Authenticate } from '../store/authentication/authentication.actions'

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private authtoken: string

  constructor (
    private toastr: ToastrService,
    private store: Store<AppState> ) {
      this.store.pipe(select(state => state.authentication.token))
        .subscribe(data => this.authtoken = data)
    }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/auth/login')
         || req.url.endsWith('/auth/signup')
         || req.url.endsWith('/drinc/all')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.authtoken}`,
          'Content-Type': 'application/json'
        }
      })
    }

    return next
      .handle(req)
      .pipe(tap((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse && req.url.endsWith('/auth/login')) {
          this.saveToken(res.body)
        }

        if (res instanceof HttpResponse && res.body.success && req.url.endsWith('/auth/signup')) {
          this.toastr.success(res.body.message)
        }

      }))
  }

  private saveToken (data) {
    if (this.decodeToken(data.token)) {
      const authtoken = data.token
      localStorage.setItem('authtoken', authtoken)
      this.toastr.success(data.message)
    } else {
      this.toastr.error('Invalid token', 'Warning!')
    }
  }

  private decodeToken (token) {
    try {
      const decoded = jwt_decode<any>(token)
      const authData = new AuthenticationDataModel(token, decoded.username, decoded.isAdmin, true)
      this.store.dispatch(new Authenticate(authData))
      return true
    } catch {
      return false
    }
  }
}
