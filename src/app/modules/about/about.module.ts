import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { Componente02Component } from './componente02/componente02.component';
import { Componente01Component } from './componente01/componente01.component';


@NgModule({
  declarations: [Componente02Component, Componente01Component],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
