import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/Home/home/home.component';
import {ListaCursosComponent } from './templates/lista-cursos/lista-cursos.component';
import {FichaCursoComponent} from './templates/ficha-curso/ficha-curso.component';
import {EditarPerfilComponent} from './templates/usuario/editar-perfil/editar-perfil.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path:'lista-cursos', component:ListaCursosComponent},
  {path: 'ficha-curso', component:FichaCursoComponent},
  {path:'editar-perfil', component:EditarPerfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
