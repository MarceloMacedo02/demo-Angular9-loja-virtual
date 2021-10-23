import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProuctsRoutingModule } from './proucts-routing.module';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProuctsRoutingModule,

  ]
})
export class ProuctsModule { }
