import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './authentification/cart/mycart/mycart.component';
import { LoginFormComponent } from './authentification/login-form/login-form.component';


import { SignupComponent } from './authentification/signup/signup.component';
import { IntegrationComponent } from './integration/integration/integration.component';
import { ContactUsComponent } from './main-footer/contact-us/contact-us.component';
import { MyorderComponent } from './myprofilepage/myorder/myorder.component';


import { MyprofileComponent } from './myprofilepage/myprofile/myprofile.component';
import { AboutusComponent } from './productmodule/aboutus/aboutus.component';
import { PlaceorderComponent } from './productmodule/placeorder/placeorder.component';
import { ProductdetailsComponent } from './productmodule/productdetails/productdetails.component';
import { ProductlistComponent } from './productmodule/productlist/productlist.component';
import { ShippingreturnpolicyComponent } from './productmodule/shippingreturnpolicy/shippingreturnpolicy.component';

const routes: Routes = [
  {
     path:'login',
     component:LoginFormComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:IntegrationComponent
  },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'myorder',
    component:MyorderComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'placeorder',
    component:PlaceorderComponent
  },
  {
    path:'productdetail',
    component:ProductdetailsComponent
  },
  {
    path:'productlist',
    component:ProductlistComponent
  },
  {
    path:'shippingretpolicy',
    component:ShippingreturnpolicyComponent
  },
  {
    path:'mycart',
    component:MycartComponent
  },

  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
