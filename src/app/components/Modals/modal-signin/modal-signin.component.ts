import { Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  
  modalRef: BsModalRef;
  emailPattern: any =	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  namePattern: any=/^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
  
  constructor(
    private route:Router, 
    private modalService: BsModalService,
    private authService: AuthService,
    ) { 
      this.userForm = this.createFormGroup();
    }
  
  
  ngOnInit(): void {
    
  }
  onRegister(templateRegistro: TemplateRef<any>): void {
    if(this.userForm.valid){
      this.nuevoUsuario = new NuevoUsuario(this.nombreUser,this.apellidoUser, this.mailUser, this.passUser);
      this.authService.nuevo(this.nuevoUsuario).subscribe(
        data => {
          console.log('Usuario creado correctamente');
          this.modalRef = this.modalService.show(
            templateRegistro,
            Object.assign({}, { class: 'gray modal-sm' })
            );
            this.onResetForm();
          },
          err => {
            this.isRegister = false;
            this.isRegisterFail = true;
            this.errMsg = err.error.mensaje;
            console.log(this.errMsg);
        }
        )
      }else{console.log('Not valid');
    }
  }

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.namePattern)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      password : new FormControl('', [Validators.required, Validators.minLength(3)]),
      confirmPassword : new FormControl('', [Validators.required])

    })
  }
  onResetForm(){
    this.userForm.reset();
  }
  userForm : FormGroup;

  mostrarDatos(){
    console.log(this.userForm.value);
  }

  get nombre(){return this.userForm.get('nombre');}
  get apellido(){return this.userForm.get('apellido');}
  get email(){return this.userForm.get('email');}
  get password(){return this.userForm.get('password');}
  get confirmPassword(){return this.userForm.get('confirmPassword');}



}
