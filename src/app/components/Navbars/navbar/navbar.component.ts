import { Component, OnInit, Output, TemplateRef} from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import {Router} from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TokenService } from 'src/app/Service/token.service';


@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
}) 
export class NavbarComponent implements OnInit {

isLogged=false;
usuario='';

constructor(
  private tokenService:TokenService
) { }


ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.usuario = this.tokenService.getEmail();
  }else{
    this.isLogged = false;
  }
}
onLogOut():void{
  this.tokenService.logout();
  window.location.reload();
}

}
