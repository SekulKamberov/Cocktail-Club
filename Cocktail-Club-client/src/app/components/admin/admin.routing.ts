import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CreateDrinkComponent } from './create-drink/create-drink.component'
import { EditDrinkComponent } from './edit-drink/edit-drink.component'
import { PendingOrdersComponent } from './pending-orders/pending-orders.component'
import { ApprovedOrdersComponent } from './approved-orders/approved-orders.component'

const adminRoutes: Routes = [
  { path: 'drink/create', component: CreateDrinkComponent },
  { path: 'drink/edit/:id', component: EditDrinkComponent },
  { path: 'orders/pending', component: PendingOrdersComponent },
  { path: 'orders/approved', component: ApprovedOrdersComponent }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
