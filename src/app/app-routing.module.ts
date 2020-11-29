import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/Home/home/home.component';
import { ListaCursosComponent } from './templates/lista-cursos/lista-cursos.component';
import { FichaCursoComponent } from './templates/ficha-curso/ficha-curso.component';
import { EditarPerfilComponent } from './templates/usuario/editar-perfil/editar-perfil.component';
import { Error404Component } from './templates/error404/error404.component';
import { CursoComponent } from './templates/curso/curso.component';
import { LoginComponent } from './templates/login/login.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-cursos', component: ListaCursosComponent },
  { path: 'ficha-curso', component: FichaCursoComponent },
  { path: 'ficha-curso/:id', component: FichaCursoComponent },
  { path: 'ficha-curso/:id/curso', component: CursoComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: Error404Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
