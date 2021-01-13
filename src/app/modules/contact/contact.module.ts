import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';


@NgModule({
  declarations: [Componente01Component, Componente02Component],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
