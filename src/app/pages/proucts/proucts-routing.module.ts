import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';

const routes: Routes = [{
  path: 'details/:id',
  component:ProdutoDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProuctsRoutingModule { }
