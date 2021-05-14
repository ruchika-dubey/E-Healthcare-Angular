import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminDetailComponent } from './admin-panel/admin-detail/admin-detail.component';
import { AdminDetailListComponent } from './admin-panel/admin-detail-list/admin-detail-list.component';
import { AdminDetailService } from './shared/admin-detail.service';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { MyfilterPipe } from './myfilter.pipe';
import { Myfilter2Pipe } from './myfilter2.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailService } from './shared/order-detail.service';
import { UserDetailComponent } from './user-detail/user-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    AdminDetailComponent,
    AdminDetailListComponent,
    FooterComponent,
    NavBarComponent,
    ProductComponent,
    CartComponent,
    MyfilterPipe,
    Myfilter2Pipe,
    CheckoutComponent,
    UserDetailComponent,
   
    
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastClass: 'toast toast-bootstrap-compatibility-fix'
    }),
    FormsModule
    
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  },AdminDetailService,OrderDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
