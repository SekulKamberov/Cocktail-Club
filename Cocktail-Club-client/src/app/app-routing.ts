import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { MenuComponent } from './components/menu/menu.component'
import { DrinksRoutingModule } from './components/drinks/drinks-routing'
import { AdminModule } from './components/admin/admin.module'

import { AdminGuard } from './core/guards/authentication/admin.guard'
import { AuthGuard } from './core/guards/authentication/authentication.guard'
import { NotFoundComponent } from './components/shared/not-found/not-found.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'drink', canActivate: [AuthGuard], loadChildren: () => DrinksRoutingModule },
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () => AdminModule },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
