import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CreateDrinkComponent } from './create-drink/create-drink.component'

const adminRoutes: Routes = [
  { path: 'drink/create', component: CreateDrinkComponent }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
