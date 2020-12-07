import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NuevoCurso } from 'src/app/models/nuevo-curso';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-creador-curso',
  templateUrl: './creador-curso.component.html',
  styleUrls: ['./creador-curso.component.css']
})
export class CreadorCursoComponent implements OnInit {

  constructor(
    private cursoService : CursoService,
    private tokenService : TokenService
    ) {
      this.tallerForm = this.createFormGroup();
     }

  ngOnInit(): void {
    this.idAdministrador = this.tokenService.getId();
  }
  tallerForm : FormGroup;
  nombreTaller = '';
  imagenTaller='';
  tituloTaller ='';
  precioTaller: number;
  descripcionTaller='';
  categoriaTaller ='';
  idAdministrador;
  namePattern: any=/^([A-Z]{1}[a-z]{1,})$|^([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^$/;

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('', [Validators.required,Validators.pattern(this.namePattern) ]),
      imagen: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)])
    })
  }
  onResetForm(){
    this.tallerForm.reset();
  }
  onCreate(){
    const nuevoCurso = new NuevoCurso(this.nombreTaller,this.tituloTaller, this.descripcionTaller, this.categoriaTaller,this.precioTaller, this.imagenTaller, this.idAdministrador);
    if(this.tallerForm.valid){
      this.cursoService.nuevo(nuevoCurso).subscribe(
        data => {
          console.log("Curso creado correctamente")
        }
      )
    }
  }

  get nombre(){return this.tallerForm.get('nombre');}
  get imagen(){return this.tallerForm.get('imagen');}
  get titulo(){return this.tallerForm.get('titulo');}
  get precio(){return this.tallerForm.get('precio');}
  get descripcion(){return this.tallerForm.get('descripcion');}
  get categoria(){return this.tallerForm.get('categoria');}


  






}
