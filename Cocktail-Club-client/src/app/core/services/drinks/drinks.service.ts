import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'

import { Store } from '@ngrx/store'
import { ToastrService } from 'ngx-toastr'
import { AppState } from '../../store/app.state'

import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'
import { GetAllDrinks } from '../../store/drinks/drinks.actions'

const baseUrl = 'http://localhost:5000/drinc/'
const allDrinksUrl = baseUrl + 'all'
const twoMinutes = 1000 * 60 * 2

@Injectable()
export class DrinksService {
    private drinksCached: boolean = false
    private cacheTime: number

    constructor (
        private http: HttpClient,
        private store: Store<AppState>,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    getAllDrinks() {

        if (this.drinksCached && (new Date().getTime() - this.cacheTime) < twoMinutes) {
            return
        }

        this.drinksCached = true
        this.cacheTime = new Date().getTime()  
        
        this.store.dispatch(new GetRequestBegin())  
        this.http.get<DrinkModel[]>(allDrinksUrl)
        .subscribe(drinks => { 
            this.store.dispatch(new GetAllDrinks(drinks))
            this.store.dispatch(new GetRequestEnd())
          })     
    }

}
