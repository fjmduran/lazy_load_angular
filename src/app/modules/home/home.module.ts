import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';


@NgModule({
  declarations: [Componente01Component, Componente02Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
