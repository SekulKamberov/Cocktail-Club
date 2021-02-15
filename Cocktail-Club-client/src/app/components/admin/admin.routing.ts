import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CreateDrinkComponent } from './create-drink/create-drink.component'
import { EditDrinkComponent } from './edit-drink/edit-drink.component'

const adminRoutes: Routes = [
  { path: 'drink/create', component: CreateDrinkComponent },
  { path: 'drink/edit/:id', component: EditDrinkComponent }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
