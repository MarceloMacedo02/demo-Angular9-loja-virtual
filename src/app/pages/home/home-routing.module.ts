import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home-index/home-index.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
        path: '',
        component: HomeIndexComponent,
      },
      {
      path: 'products',
      loadChildren: () => import('./../proucts/proucts.module').then(m => m.ProuctsModule),
    },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
