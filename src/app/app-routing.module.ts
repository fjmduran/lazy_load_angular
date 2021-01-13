import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
     loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)      
  },
  {
    path: 'contact',
     loadChildren: () => import('../app/modules/contact/contact.module').then(m => m.ContactModule)      
  },
  {
    path: 'about',
     loadChildren: () => import('../app/modules/about/about.module').then(m => m.AboutModule)      
  },  
  {
    path: '**', component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
