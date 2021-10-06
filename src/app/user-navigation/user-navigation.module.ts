import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavagationComponent } from './user-navagation/user-navagation.component';
import { RouterModule } from '@angular/router';
import { WomansCollectionComponent } from './womans-collection/womans-collection.component';
import { MansComponentComponent } from './mans-component/mans-component.component';
import { BagsComponent } from './bags/bags.component';
import { ShowsComponent } from './shows/shows.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AllCollectionsComponent } from './all-collections/all-collections.component';
import { PagesComponent } from './pages/pages.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
   UserNavagationComponent,
   WomansCollectionComponent,
   MansComponentComponent,
   BagsComponent,
   ShowsComponent,
   AccessoriesComponent,
   AllCollectionsComponent,
   PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatExpansionModule 
  ],
  exports:[
     UserNavagationComponent,
     WomansCollectionComponent,
     MansComponentComponent,
     BagsComponent,
     ShowsComponent,
     AccessoriesComponent,
     AllCollectionsComponent,
     PagesComponent
  ]
})
export class UserNavigationModule { }
