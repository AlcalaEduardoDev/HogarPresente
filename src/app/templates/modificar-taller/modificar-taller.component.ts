import { Component, OnInit, TemplateRef  } from '@angular/core';
import { CursoService } from 'src/app/Service/curso.service';
import {UserService} from 'src/app/Service/user.service';
import { Curso } from '../../interface/curso';
import {Router, ActivatedRoute} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {faImages} from '@fortawesome/free-solid-svg-icons'


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
    ngOnInit(): void { 
      let cursoId = this.activeRouter.snapshot.paramMap.get('id');
      this.cursoService.findOne(cursoId).subscribe(
        data=>this.datosCurso = data     
      )
    }
    irContenido(){}

}
