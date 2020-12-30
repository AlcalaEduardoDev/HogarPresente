import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JwtDto } from 'src/app/models/jwt-dto';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {
 

  listaUsuarios: Array<any>;
  correoRepetido: boolean=false;
  isRegister= false;
  isRegisterFail= false;
  nuevoUsuario:NuevoUsuario;
  nombreUser : string;
  apellidoUser:string;
  mailUser:string;
  passUser:string;
  fotoUser:'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png';
  rolUser: string = "alumno";
  estudiosUser: string;
  edadUser: number;
  errMsg: string;
  userForm : FormGroup;
  modalRef: BsModalRef;
  emailPattern: any =	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  namePattern: any=/^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;
  isError:boolean=false;
  estudiosArray : Array<string> =[
    "Primario", "Secundario", "Terciario", "Superiores"
  ];
  constructor(
    private route:Router, 
    private modalService: BsModalService,
    private authService: AuthService,
    private usuraioService:UserService
  ) {
    this.userForm = this.createFormGroup();
   }

  ngOnInit(): void {
    this.usuraioService.findAll().subscribe(
      data=>{
        this.listaUsuarios = data;
        console.log(this.listaUsuarios)
      }
    )
  }
  onRegister(templateRegistro: TemplateRef<any>): void {
    if(this.userForm.valid){
      if (this.verificarCorreo()) {
        this.correoRepetido= false;
        this.nuevoUsuario = new NuevoUsuario(this.nombreUser,this.apellidoUser, this.mailUser, this.passUser,this.edadUser,this.estudiosUser,this.rolUser);
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
              this.onIsError();
          })        
        }else{
        console.log("Usuario repetido")
        this.correoRepetido = true;
        }
      }else{
        this.onIsError();
    }
  }

  verificarCorreo():boolean{
    for(const usuario of this.listaUsuarios){
      if (this.mailUser==usuario.correo) {
        return false;
      }
    }
    return true

  }
  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      apellido: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword : new FormControl('', [Validators.required]),
      edad : new FormControl('', [Validators.required]),
      estudios: new FormControl('', [Validators.required])
    })
  }
  onResetForm(){
    this.userForm.reset();
  }
  onIsError(): void{
    this.isError = true;
    setTimeout(()=>{
      this.isError = true
    }, 3000)
  }
  mostrarDatos(){
    console.log(this.userForm.value);
  }
  edadCounter(i:number){
    return new Array(i);
  }
  get nombre(){return this.userForm.get('nombre');}
  get apellido(){return this.userForm.get('apellido');}
  get email(){return this.userForm.get('email');}
  get password(){return this.userForm.get('password');}
  get confirmPassword(){return this.userForm.get('confirmPassword');}
  get edad(){return this.userForm.get('edad');}
  get estudios(){return this.userForm.get('estudios');}


}
