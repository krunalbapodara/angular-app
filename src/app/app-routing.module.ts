import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes:Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'contact', component : ContactComponent },
  { path : '**', component : NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash : true })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
