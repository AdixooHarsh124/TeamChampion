import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { MyorderComponent } from './myorder/myorder.component';



@NgModule({
  declarations: [
    MyprofileComponent,
    MywishlistComponent,
    MyorderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MyprofileComponent,
    MywishlistComponent,
    MyorderComponent
  ]
})
export class MyprofilepageModule { }
