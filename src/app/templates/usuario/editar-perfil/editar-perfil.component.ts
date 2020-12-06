import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import {Alumno} from '../../../interface/alumno';
import { TokenService } from 'src/app/Service/token.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user:Alumno = new Alumno();

  namePattern: any=/^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
  nombreInput:string = '';
  apellidoInput:string = '';
  userForm : FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private dataUser:UserService,
    private location: Location,
    private tokenService: TokenService
  ) {this.userForm = this.createFormGroup();}

  ngOnInit(): void { 
    this.nombreInput = this.tokenService.getNombre();
    this.apellidoInput = this.tokenService.getApellido();
   }

  update(){
    this.dataUser.update(this.user).subscribe(
      e=> console.log('Datos modificados con exito!')
    );
  }

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      oldPassword : new FormControl('', [Validators.required, Validators.minLength(3)]),
      newPassword : new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmNewPassword : new FormControl('', [Validators.required]),      
    })
  }
  onResetForm(){
    this.userForm.reset();
  }
  
  mostrarDatos(){
    console.log(this.userForm.value);
  }
  get nombre(){return this.userForm.get('nombre');}
  get apellido(){return this.userForm.get('apellido');}
  get oldPassword(){return this.userForm.get('oldPassword');}
  get newPassword(){return this.userForm.get('newPassword');}
  get confirmNewPassword(){return this.userForm.get('confirmNewPassword');}
  volver(){
    this.location.back();
  }
}
