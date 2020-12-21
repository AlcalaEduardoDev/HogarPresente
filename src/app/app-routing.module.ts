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
import { CreadorCursoComponent } from './templates/creador-curso/creador-curso.component';
import { ModificarTallerComponent } from './templates/modificar-taller/modificar-taller.component';
import { ModificarContenidoComponent } from './templates/modificar-contenido/modificar-contenido.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-cursos', component: ListaCursosComponent },
  { path: 'ficha-curso', component: FichaCursoComponent },
  { path: 'ficha-curso/:id', component: FichaCursoComponent },
  { path: 'modificar_taller/:id', component: ModificarTallerComponent },
  { path: 'ficha-curso/:id/curso', component: CursoComponent },
  { path: 'editar-perfil', component: EditarPerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'creador-curso', component: CreadorCursoComponent },
  { path: 'modificar_taller/:id/modificar-contenido', component: ModificarContenidoComponent},
  { path: '**', component: Error404Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
