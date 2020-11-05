import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/Home/home/home.component';
import {ListaCursosComponent } from './templates/lista-cursos/lista-cursos.component';
import {FichaCursoComponent} from './templates/ficha-curso/ficha-curso.component';
import {EditarPerfilComponent} from './templates/usuario/editar-perfil/editar-perfil.component';
import {Error404Component} from './templates/error404/error404.component';
import {CursoComponent} from './templates/curso/curso.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'lista-cursos', component:ListaCursosComponent},
  {path: 'ficha-curso', component:FichaCursoComponent},
  {path:'editar-perfil', component:EditarPerfilComponent},
  {path:'curso', component:CursoComponent},

  {path:'**', component:Error404Component},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
