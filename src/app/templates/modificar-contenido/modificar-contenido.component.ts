import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Curso } from 'src/app/Interface/curso';
import { Unidad } from 'src/app/Interface/unidad';
import { NuevoContenido } from 'src/app/models/nuevo-contenido';
import { ContenidosService } from 'src/app/Service/contenidos.service';
import { TokenService } from 'src/app/Service/token.service';
import { CursoService } from 'src/app/Service/curso.service';
import { MatDialog } from '@angular/material/dialog';
import {DialogCrearContenidoComponent} from '../../components/dialog/dialog-crear-contenido/dialog-crear-contenido.component'

@Component({
  selector: 'app-modificar-contenido',
  templateUrl: './modificar-contenido.component.html',
  styleUrls: ['./modificar-contenido.component.css']
})
export class ModificarContenidoComponent implements OnInit {

  i: number = 0;
  j: number = 0;
  unidades: Array<Unidad>;
  urlSafe: SafeResourceUrl;
  datosCurso: Curso;
  video: boolean = true;
  videoId: string = "";
  nombreCrear: string = "";
  modalRef: BsModalRef;


  //Variables para crear el curso
  nombre: string = "";
  descripcion: string = "";
  documento: string = "";
  unidadId:number;
  //Variables para modificar el curso
  nombreNuevo: string = "";
  descripcionNueva: string = "";
  documentoNuevo: string = "";
  


  constructor(
    private cursoService: CursoService,
    private contenidoService: ContenidosService,
    private activeRouter: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private route: Router,
    private modalService: BsModalService,
    private tokenService:TokenService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      let cursoId = this.activeRouter.snapshot.paramMap.get('id');
    this.cursoService.findOne(cursoId).subscribe(
      data => {
        this.datosCurso = data
        this.unidades = this.datosCurso.unidades;
        if (this.unidades[0].contenidos[0].documento.indexOf("www.youtube.com") == -1) {
          this.video = false;
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.unidades[0].contenidos[0].documento);
        } else {
          this.videoId = this.unidades[0].contenidos[0].documento.split('v=')[1].split('&')[0];
          this.video = true;
        }
        console.log(this.datosCurso);
      });
    } else {
      this.route.navigate(['lista-cursos']);
      
    }
    
  }

  public cambiarVistaDocumento(url: string) {
    if (url.indexOf("www.youtube.com") == -1) {
      this.video = false;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.videoId = url.split('v=')[1].split('&')[0];
      this.video = true;
    }
  }
  onCreate(modalCrearUnidad: TemplateRef<any>, unidadId){
    this.unidadId = unidadId;
    const dialogRef = this.dialog.open(DialogCrearContenidoComponent,{
      data : unidadId
    })
  }
  updateNombre(id){
    this.contenidoService.updateNombre(id, this.nombreNuevo).subscribe(
      data=>{
        window.location.reload();
      }
  );
  }
  updateDocumento(id){
    this.contenidoService.updateDocumento(id, this.documentoNuevo).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }

}
