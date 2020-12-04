import { Component, OnInit, } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { TokenService } from 'src/app/Service/token.service';


@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
}) 
export class NavbarComponent implements OnInit {

isLogged=false;
nombreUser='';
apellidoUser = '';
fotoUser='';
constructor(
  private tokenService:TokenService
) { }


ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.nombreUser = this.tokenService.getNombre();
    this.apellidoUser = this.tokenService.getApellido();
    this.fotoUser = this.tokenService.getFoto();
  }else{
    this.isLogged = false;
  }
}
onLogOut():void{
  this.tokenService.logout();
  window.location.reload();
}

}
