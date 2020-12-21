import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/Interface/curso';
import { Unidad } from 'src/app/Interface/unidad';
import { ContenidosService } from 'src/app/Service/contenidos.service';
import { CursoService } from 'src/app/Service/curso.service';

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

  nombreNuevo: string = "";
  documento: string = "";
  constructor(
    private cursoService: CursoService,
    private contenidoService: ContenidosService,
    private activeRouter: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
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
      });
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
  textArea(){
    
  }
  onCreate(idUnidad) {
    this.contenidoService.nuevo(idUnidad,this.nombreNuevo).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
  updateNombre(id){
    this.contenidoService.updateNombre(id, this.nombreNuevo).subscribe(
      data=>{
        window.location.reload();
      }
  );
  }
  updateDocumento(id){
    this.contenidoService.updateDocumento(id, this.documento).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }

}
