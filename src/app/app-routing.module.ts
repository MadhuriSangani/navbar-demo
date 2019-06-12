import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {UserComponent} from './components/user/user.component';
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user/home'},
  { path: 'user', component: UserComponent, children: [
      { path: 'home', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'testimonials', component: TestimonialsComponent},
    ]},
  { path: 'admin', component: AdminComponent , children: [
    { path: '**', component: PageNotFoundComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
