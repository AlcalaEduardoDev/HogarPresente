import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal.directive';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbars/navbar/navbar.component';
import { ModalLoginComponent } from './components/Modals/modal-login/modal-login.component';
import { CardIndexComponent } from './components/Cards/card-index/card-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './templates/Home/home/home.component';
import { ListaCursosComponent } from './templates/lista-cursos/lista-cursos.component';
import { FooterComponent } from './components/Footers/footer/footer.component';
import { PaginationComponent } from './components/Paginations/pagination/pagination.component';
import { CardCursoComponent } from './components/Cards/card-curso/card-curso.component';
import { FilterCursosPipe } from './Pipes/filter-cursos.pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FichaCursoComponent } from './templates/ficha-curso/ficha-curso.component';
import { EditarPerfilComponent } from './templates/usuario/editar-perfil/editar-perfil.component';
import { Error500Component } from './templates/error500/error500.component';
import { Error404Component } from './templates/error404/error404.component';
import {SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseComponent } from './components/collapse/collapse.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { CursoComponent } from './templates/curso/curso.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalSigninComponent } from './components/Modals/modal-signin/modal-signin.component';
import { interceptorProvider } from './interceptors/user-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfirmEqualValidatorDirective,
    ModalLoginComponent,
    ModalSigninComponent,
    CardIndexComponent,
    HomeComponent,
    ListaCursosComponent,
    FooterComponent,    
    PaginationComponent,
    CardCursoComponent,
    FilterCursosPipe,
    FichaCursoComponent,
    EditarPerfilComponent,
    Error500Component,
    Error404Component,
    CollapseComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    YouTubePlayerModule,
    SocialLoginModule,
    PdfViewerModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),    
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ interceptorProvider,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '558627112130-vrffn2c5p44pppm60l4akli5kfrha6pt.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('4108383465858931'),
          },      
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
