import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,FormsModule, RouterModule
  ],exports:[ProductCardComponent]
})
export class ProductCardModule { }
