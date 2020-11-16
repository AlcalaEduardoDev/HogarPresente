import { Component, OnInit, Output, TemplateRef} from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import {Router} from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
}) 
export class NavbarComponent implements OnInit {

public alumnos: Array<Alumno> = [];

modalRef: BsModalRef;

//Ng Inputs
user:'';
password:'';
nombreReg:'';
apellidoReg:'';
icono:'data:image/png;base64,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';
// Variables auxiliares que determinan el estado del usuario y que tipo de usuario se loggeo
usuarioLogeado:boolean = false;
dataUsuario: Alumno;
isLogged:boolean;
userLogged:SocialUser;
socialUser:SocialUser;

constructor(
  private userAlumnoService:UserAlumnoService, 
  private route:Router, 
  private modalService: BsModalService,
  private authService: SocialAuthService) { }


ngOnInit(): void {
  this.authService.authState.subscribe(
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

verificacion(){
  for (const alumno of this.alumnos){
    if(alumno.email == this.user){
      if(alumno.pass == this.password){
        console.log("Funciona la verificacion cutre");                   
        this.usuarioLogeado = true;
        this.userAlumnoService.loggeado=true;
        this.dataUsuario = alumno;

      }
    }
  } 
}

onLoggin():void{
  var nuevoAlumno:Alumno;
  nuevoAlumno.icon=this.icono;
  nuevoAlumno.email=this.user;
  nuevoAlumno.nombre=this.nombreReg;
  nuevoAlumno.apellido=this.apellidoReg;
  nuevoAlumno.pass=this.password;
  this.userAlumnoService.login(nuevoAlumno).subscribe(res=>{
    if(res){
    }
  })
}

Registrar(){
  var nuevoAlumno:Alumno;
  nuevoAlumno.icon=this.icono;
  nuevoAlumno.email=this.user;
  nuevoAlumno.nombre=this.nombreReg;
  nuevoAlumno.apellido=this.apellidoReg;
  nuevoAlumno.pass=this.password;
  this.userAlumnoService.addAlumno(nuevoAlumno).subscribe(alumno => console.log(alumno));
  }


  signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
    data=>{
      console.log(data);
      this.socialUser = data;
      this.isLogged = true;
      this.userAlumnoService.loggeado=true;

    });
}

signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
  data=>{
    console.log(data);
    this.socialUser = data;
    this.isLogged = true;
    this.userAlumnoService.loggeado=true;

    //window.location.href = "/home";
  });;
}

logOut() : void{
  this.authService.signOut();
  this.userAlumnoService.loggeado=false;
} 

}
