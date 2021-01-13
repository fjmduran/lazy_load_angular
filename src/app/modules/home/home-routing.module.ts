import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Componente02Component } from './componente02/componente02.component';
import { Componente01Component } from './componente01/componente01.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "uno", component: Componente01Component },
      { path: "dos", component: Componente02Component },      
      { path: "**", redirectTo: "uno"}      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
