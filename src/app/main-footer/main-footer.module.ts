import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { InformationComponent } from './information/information.component';
import { SupportComponent } from './support/support.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqpageComponent } from './faqpage/faqpage.component';




@NgModule({
  declarations: [
    FooterMainComponent,
    ContactUsComponent,
    HelpComponent,
    InformationComponent,
    SupportComponent,
    FaqpageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterMainComponent,
    ContactUsComponent,
    HelpComponent,
    InformationComponent,
    SupportComponent,
    FaqpageComponent,
  ]
})
export class MainFooterModule { }
