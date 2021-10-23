import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearderRoutingModule } from './hearder-routing.module';
import { HearderComponent } from './hearder.component';
import { SmallCarComponent } from '../../small-car/small-car.component';


@NgModule({
  declarations: [
    HearderComponent,
    SmallCarComponent,
  ],
  imports: [
    CommonModule,
    HearderRoutingModule
  ],exports:[HearderComponent]
})
export class HearderModule { }
