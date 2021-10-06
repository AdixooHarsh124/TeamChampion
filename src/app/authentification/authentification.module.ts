import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ForegtpasswordComponent } from './foregtpassword/foregtpassword.component';
import { RouterModule  } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSigninDropDownComponent } from './login-signin-drop-down/login-signin-drop-down.component';
import { ProfileDropDownComponent } from './profile-drop-down/profile-drop-down.component';
import { CartComponent } from './cart/cart.component';
import { UserNavigationModule } from '../user-navigation/user-navigation.module';

import { LoginFormComponent } from './login-form/login-form.component';
import { MainFooterModule } from 'src/app/main-footer/main-footer.module';
import { MycartComponent } from './cart/mycart/mycart.component';

@NgModule({
  declarations: [
    SignupComponent,
    ForegtpasswordComponent,
    HeaderComponent,
    LoginSigninDropDownComponent,
    ProfileDropDownComponent,
    CartComponent,
    LoginFormComponent,
    MycartComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatMenuModule,
    ReactiveFormsModule,
    UserNavigationModule,
    MainFooterModule,
    
    
  ],
  exports:[
    SignupComponent,
    ForegtpasswordComponent,
    HeaderComponent,
    LoginSigninDropDownComponent,
    ProfileDropDownComponent,
    CartComponent,
    LoginFormComponent,
    MycartComponent
  ],
})
export class AuthentificationModule { }
