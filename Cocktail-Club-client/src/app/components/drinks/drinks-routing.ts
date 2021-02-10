import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DetailsPageComponent } from './details-page/details-page.component'

const drinksRoutes: Routes = [
  { path: 'details/:id', component: DetailsPageComponent},
]

@NgModule({
  imports: [RouterModule.forChild(drinksRoutes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
