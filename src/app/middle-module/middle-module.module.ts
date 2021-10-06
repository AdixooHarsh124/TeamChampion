import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatMenuModule } from '@angular/material/menu';


import { Offer1Component } from './offer1/offer1.component';
import { Offer2Component } from './offer2/offer2.component';
import { Offer3Component } from './offer3/offer3.component';
import { Offer4Component } from './offer4/offer4.component';
import { Offer5Component } from './offer5/offer5.component';
import { KidComponent } from './kid/kid.component';

@NgModule({
  declarations: [
    Offer1Component,
    Offer2Component,
    Offer3Component,
    Offer4Component,
    Offer5Component,
    KidComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
    MatMenuModule
  ],
  exports :[
    Offer1Component,
    Offer2Component,
    Offer3Component,
    Offer4Component,
    Offer5Component,
    KidComponent
  ],
})
export class MiddleModuleModule { }
