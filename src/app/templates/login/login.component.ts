import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interface/alumno';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenService } from 'src/app/Service/token.service';
import { DialogErrorLoginComponent } from '../../components/dialog/dialog-error-login/dialog-error-login.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private route: Router,
    private location: Location,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService

  ) { 
    this.userForm = this.createFormGroup();
  }

  userForm : FormGroup;
  public alumnos: Array<Alumno> = [];
  alumnoNuevo: Alumno = new Alumno();
  alumno: Alumno = new Alumno();
  loginFail = false;
  isLogged: boolean = false;
  roles: string[] = [];
  loginUsuario: LoginUsuario;
  emailUsuario: string;
  passUsuario: string;
  msgError: string;
  
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.loginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  
  onLogin(): void {
    this.spinner.show();

    this.loginUsuario = new LoginUsuario(this.emailUsuario, this.passUsuario);
    console.log(this.loginUsuario.correo);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.spinner.hide();

        this.isLogged = true;
        this.loginFail = false;
        this.tokenService.setId(data.id);
        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.correo);
        this.tokenService.setAuthorities(data.authorities);
        this.tokenService.setNombre(data.nombre);
        this.tokenService.setApellido(data.apellido);
        this.tokenService.setFoto(data.foto);
        this.tokenService.setEstudio(data.estudios);
        this.tokenService.setEdad(data.edad);
        this.roles = data.authorities;
        this.location.back();

      },
      err => {
        this.isLogged = false;
        this.loginFail = true;
        this.msgError = err.error.mensaje;
        this.spinner.hide();

        const dialogRef = this.dialog.open(DialogErrorLoginComponent, {
          data:this.msgError,
          width: '250px'
        });
        console.log(this.msgError);
      }
    )
  }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }

  onResetForm(){
    this.userForm.reset();
  }
  get email(){return this.userForm.get('email');}
  get password(){return this.userForm.get('password');}

}
