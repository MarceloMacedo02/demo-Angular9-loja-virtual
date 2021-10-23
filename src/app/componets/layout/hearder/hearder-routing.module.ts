import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearderComponent } from './hearder.component';

const routes: Routes = [
  {
    path: 'main',
    component:HearderComponent,
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HearderRoutingModule { }
