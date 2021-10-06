import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ShippingreturnpolicyComponent } from './shippingreturnpolicy/shippingreturnpolicy.component';
import { AboutusComponent } from './aboutus/aboutus.component';



@NgModule({
  declarations: [
    PlaceorderComponent,
    ProductdetailsComponent,
    ProductlistComponent,
    ShippingreturnpolicyComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductmoduleModule { }
