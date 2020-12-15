import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbars/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './templates/Home/home/home.component';
import { FooterComponent } from './components/Footers/footer/footer.component';
import { PaginationComponent } from './components/Paginations/pagination/pagination.component';
import { CardCursoComponent } from './components/Cards/card-curso/card-curso.component';
import { FilterCursosPipe } from './Pipes/filter-cursos.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FichaCursoComponent } from './templates/ficha-curso/ficha-curso.component';
import { EditarPerfilComponent } from './templates/usuario/editar-perfil/editar-perfil.component';
import { Error500Component } from './templates/error500/error500.component';
import { Error404Component } from './templates/error404/error404.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CursoComponent } from './templates/curso/curso.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { interceptorProvider } from './interceptors/user-interceptor.service';
import { LoginComponent } from './templates/login/login.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';
import { NavComponent } from './components/nav/nav.component';
import { CreadorCursoComponent } from './templates/creador-curso/creador-curso.component';
import { ListaCursosComponent } from './templates/lista-cursos/lista-cursos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ModificarTallerComponent } from './templates/modificar-taller/modificar-taller.component';
import { MaterialModule } from './material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import 'boxicons';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    ConfirmEqualValidatorDirective,
    HomeComponent,
    FooterComponent,
    PaginationComponent,
    CardCursoComponent,
    FilterCursosPipe,
    FichaCursoComponent,
    EditarPerfilComponent,
    Error500Component,
    Error404Component,
    CollapseComponent,
    CursoComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent,
    CreadorCursoComponent,
    ListaCursosComponent,
    ModificarTallerComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbNavModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    YouTubePlayerModule,
    SocialLoginModule,
    PdfViewerModule,
    NgbModule,
    MatSlideToggleModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [interceptorProvider,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));