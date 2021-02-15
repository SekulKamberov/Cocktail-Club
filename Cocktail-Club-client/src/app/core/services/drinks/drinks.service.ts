import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'

import { Store } from '@ngrx/store'
import { ToastrService } from 'ngx-toastr'
import { AppState } from '../../store/app.state'

import { GetRequestBegin, GetRequestEnd } from '../../store/http/http.actions'
import { DrinkModel } from '../../../components/drinks/models/DrinkModel'
import { GetAllDrinks, CreateDrink, LikeDrink, UnlikeDrink, EditDrink } from '../../store/drinks/drinks.actions'

import { CreateDrinkModel } from '../../../components/admin/models/CreateDrinkModel'
import { ResponseDataModel } from '../../models/ResponseDataModel'

const baseUrl = 'http://localhost:5000/drinc/'
const allDrinksUrl = baseUrl + 'all'
const createDrinkUrl = baseUrl + 'create'
const editDrinkUrl = baseUrl + 'edit/'

const likeDrinkUrl = baseUrl + 'like/'
const unlikeDrinkUrl = baseUrl + 'unlike/'

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

    createDrink(model: CreateDrinkModel) {
      this.spinner.show()
      this.http
        .post(createDrinkUrl, model)
        .subscribe((res: ResponseDataModel) => {
          this.store.dispatch(new CreateDrink(res.data))
          this.spinner.hide()
          this.router.navigate(['/menu'])
          this.toastr.success('Cocktail added successfully')
        })
    }

    editDrink(model: DrinkModel) {
      this.spinner.show()
      this.http
      .post(`${editDrinkUrl}${model._id}`, model)
      .subscribe((res: ResponseDataModel) => {
        this.store.dispatch(new EditDrink(res.data))
        this.spinner.hide()
        this.router.navigate(['/menu'])
        this.toastr.success('Product edited successfully.')
      })

    }




    likeDrink(id: string, username: string) {
      this.store.dispatch(new LikeDrink(id, username))
      this.http
        .post(`${likeDrinkUrl}${id}`, {})
        .subscribe()
    }

    unlikeDrink(id: string, username: string) {
      this.store.dispatch(new UnlikeDrink(id, username))
      this.http
        .post(`${unlikeDrinkUrl}${id}`, {})
        .subscribe()
    }


}
