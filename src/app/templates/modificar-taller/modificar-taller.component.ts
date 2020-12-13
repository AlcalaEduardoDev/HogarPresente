import { Component, OnInit, TemplateRef  } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service';
import {UserService} from 'src/app/Service/user.service';
import { Curso } from '../../interface/curso';
import {Router, ActivatedRoute} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {faImages} from '@fortawesome/free-solid-svg-icons'
import { NuevoCurso } from 'src/app/models/nuevo-curso';


@Component({
  selector: 'app-modificar-taller',
  templateUrl: './modificar-taller.component.html',
  styleUrls: ['./modificar-taller.component.css']
})
export class ModificarTallerComponent implements OnInit {

  
  constructor(
    public userAlumnoService:UserService,
    private route:Router,
    private activeRouter:ActivatedRoute,
    private modalService: BsModalService,
    private cursoService : CursoService,
    ) {}
    datosCurso : Curso;
    faImages=faImages;
    textareaDescripcion:boolean=false;
    descripcion:string;
    taller : Curso=null;
    nombreTaller:string = null;
    subtituloTaller :string = null;
    precioTaller: number  = null;
    descripcionTaller:string = null;
    categoriaTaller :string = null;
    idAdministrador: number = null;

    ngOnInit(): void { 
      let cursoId = this.activeRouter.snapshot.paramMap.get('id');
      this.cursoService.findOne(cursoId).subscribe(
        data=>this.datosCurso = data     
      )
    }
    irContenido(){}
    onUpdate(){
      const cursoId = this.activeRouter.snapshot.paramMap.get('id');
      const cursoModif = new NuevoCurso(this.nombreTaller,this.subtituloTaller, this.descripcionTaller, this.categoriaTaller,this.precioTaller,  this.idAdministrador);
      console.log(this.taller);
      /*this.cursoService.update(cursoId, cursoModif).subscribe(
        data => {
          console.log("Taller modificado correctamente");
          window.location.reload();
        }
      )*/
    }
    activarTextareaDescripcion(){
      if(this.textareaDescripcion){
        this.textareaDescripcion = false;
      }else this.textareaDescripcion = true;
      console.log(this.textareaDescripcion);
    }

}
