import { Component, OnInit, Output, TemplateRef} from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import {Router} from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, LoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TokenService } from 'src/app/Service/token.service';
import { AuthService } from 'src/app/Service/auth.service';
import { LoginUsuario } from 'src/app/models/login-usuario';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {



  public alumnos: Array<Alumno> = [];
  alumnoNuevo: Alumno = new Alumno();
  alumno:Alumno = new Alumno();
  modalRef: BsModalRef;

  loginUsuario : LoginUsuario;
  isLogged:boolean;
  loginFail=false;
  emailUsuario:string;
  passUsuario:string;
  roles:string[]= [] ;
  msgError : string;


  // Variables auxiliares que determinan el estado del usuario y que tipo de usuario se loggeo
  usuarioLogeado:boolean = false;
  dataUsuario: Alumno;
  userLogged:SocialUser;
  socialUser:SocialUser;
  
  constructor(
    private userAlumnoService:UserAlumnoService, 
    private route:Router, 
    private modalService: BsModalService,
    private SocialauthService: SocialAuthService,
    private tokenService: TokenService,
    private authService: AuthService,
    ) { }
  
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.usuarioLogeado=true;
      this.loginFail=false;
      this.roles = this.tokenService.getAuthorities();
    }

    this.SocialauthService.authState.subscribe(
      data => {
        this.userLogged=data;
        this.isLogged = (this.userLogged!=null);
      } 
    );
    this.userAlumnoService
    .findAll()
    .subscribe((response: Array<Alumno>) =>{
      this.alumnos=response; 
    }
    );
  }
  
  onLogin():void{
    this.loginUsuario = new LoginUsuario (this.emailUsuario, this.passUsuario);
    console.log(this.loginUsuario.correo);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged=true;
        this.loginFail=false;

        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.correo);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
      },
      err =>{
        this.isLogged=false;
        this.loginFail = true;
        this.msgError = err.error.mensaje;
        console.log(this.msgError);
      }
    )
  }
  
  
 /* verificacion(){
    for (const alumno of this.alumnos){
      if(alumno.email == this.alumno.email){
        if(alumno.pass == this.alumno.pass){
          console.log("Funciona la verificacion cutre");                   
          this.usuarioLogeado = true;
          this.userAlumnoService.loggeado=true;
          this.dataUsuario = alumno;
        }
      }
    } 
  }*/
  
  signInWithGoogle(): void {
    this.SocialauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data=>{
        console.log(data);
        this.socialUser = data;
        this.isLogged = true;
        this.userAlumnoService.loggeado=true;  
    });
  }
  
  signInWithFB(): void {
    this.SocialauthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data=>{
      console.log(data);
      this.socialUser = data;
      this.isLogged = true;
      this.userAlumnoService.loggeado=true;
    });;
  }
  
  logOut() : void{
    this.SocialauthService.signOut();
    this.userAlumnoService.loggeado=false;
  } 

}
