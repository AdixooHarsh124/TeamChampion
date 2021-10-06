import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationComponent } from './integration/integration.component';

import { MainFooterModule } from '../main-footer/main-footer.module';
import { MatMenuModule } from '@angular/material/menu';
import { MiddleModuleModule } from '../middle-module/middle-module.module';





@NgModule({
  declarations: [
    IntegrationComponent,
  ],
  imports: [
    CommonModule,
    MiddleModuleModule
  ],
  exports:[
    IntegrationComponent
  ]
})
export class IntegrationModule { }
