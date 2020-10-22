import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeuserComponent } from './Formularios/HomeUser/homeuser/homeuser.component';
import { HomeComponent } from './Formularios/Home/home/home.component';
import {ListaCursosComponent } from './Formularios/lista-cursos/lista-cursos.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'homeuser', component: HomeuserComponent},
  {path:'lista-cursos', component:ListaCursosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
