import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MainFooterModule } from './main-footer/main-footer.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { UserNavigationModule } from './user-navigation/user-navigation.module';
import { IntegrationModule } from './integration/integration.module';

import { MiddleModuleModule } from './middle-module/middle-module.module';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
   
    ReactiveFormsModule,
    CarouselModule,
    MatMenuModule,
    MatExpansionModule,
  
    //-----
  
    UserNavigationModule,
    AuthentificationModule,
    MainFooterModule,
    IntegrationModule,
    MiddleModuleModule
  
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
