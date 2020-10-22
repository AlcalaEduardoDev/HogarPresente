import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbars/navbar/navbar.component';
import { ModalLoginComponent } from './components/Modals/modal-login/modal-login.component';
import { CardIndexComponent } from './components/Cards/card-index/card-index.component';
import { FormsModule } from '@angular/forms';
import { HomeuserComponent } from './Formularios/HomeUser/homeuser/homeuser.component';
import { NavbaruserComponent } from './components/Navbars/navbaruser/navbaruser.component';
import { HomeComponent } from './Formularios/Home/home/home.component';
import { ListaCursosComponent } from './Formularios/lista-cursos/lista-cursos.component';
import { FooterComponent } from './components/Footers/footer/footer.component';
import { PaginationComponent } from './components/Paginations/pagination/pagination.component';
import { CardCursoComponent } from './components/Cards/card-curso/card-curso.component';
import { FilterCursosPipe } from './Pipes/filter-cursos.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalLoginComponent,
    CardIndexComponent,
    HomeuserComponent,
    NavbaruserComponent,
    HomeComponent,
    ListaCursosComponent,
    FooterComponent,
    PaginationComponent,
    CardCursoComponent,
    FilterCursosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
