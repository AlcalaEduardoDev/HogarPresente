import { Component, OnInit, Output, TemplateRef} from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import {Router} from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TokenService } from 'src/app/Service/token.service';
import { AuthService } from 'src/app/Service/auth.service';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Component({
  selector: 'app-modal-signin',
  templateUrl: './modal-signin.component.html',
  styleUrls: ['./modal-signin.component.css']
})
export class ModalSigninComponent implements OnInit {

  isRegister= false;
  isRegisterFail= false;
  nuevoUsuario:NuevoUsuario;
  nombreUser : string;
  apellidoUser:string;
  mailUser:string;
  passUser:string;
  fotoUser:'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png';
  roles: string [] = [];
  errMsg: string;
  

  
  constructor(
    private userAlumnoService:UserAlumnoService, 
    private route:Router, 
    private modalService: BsModalService,
    private tokenService: TokenService,
    private authService: AuthService) { }
  
  
  ngOnInit(): void {
    
  }
  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombreUser,this.apellidoUser, this.mailUser, this.passUser);
    console.log(this.nuevoUsuario.nombre);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        console.log('Usuario creado correctamente')
        window.location.reload();
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsg = err.error.mensaje;
        console.log(this.errMsg);
      }
    )
  }
  
  

}
