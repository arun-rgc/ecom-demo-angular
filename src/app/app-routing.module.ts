import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: 'category', loadChildren: () => import("./category/category.module").then(m => m.CategoryModule) },
  { path: '', component: HomeComponent  },
  { path: 'cart', component: CartComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
