import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'user', component: UserComponent,
  children: [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
   
  ]
},
{ path: 'home', component: HomeComponent },

{path: 'cart', component: CartComponent,canActivate:[AuthGuard],data:{permittedRoles:['Customer']}},
{path: 'checkout', component:CheckoutComponent,canActivate:[AuthGuard],data:{permittedRoles:['Customer']}},
  { path: 'product', component: ProductComponent ,canActivate:[AuthGuard]},
  { path: 'forbidden', component: ForbiddenComponent},
  { path: 'adminpanel', component: AdminPanelComponent ,canActivate:[AuthGuard],data:{permittedRoles:['Admin']}},
  { path: 'userdetail', component: UserDetailComponent ,canActivate:[AuthGuard],data:{permittedRoles:['Admin']}},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
