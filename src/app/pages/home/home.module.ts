import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HearderModule } from 'src/app/componets/layout/hearder/hearder.module';
import { HomeIndexComponent } from '../home-index/home-index.component';
import { ProductCardModule } from 'src/app/componets/product-card/product-card.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [HomeComponent,
    HomeIndexComponent,   ],
  imports: [
    CommonModule,
    HearderModule,
    HomeRoutingModule,
    ProductCardModule,
    NgxSkeletonLoaderModule,

  ],exports:[HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
