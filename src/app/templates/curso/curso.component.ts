import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interface/curso'
import { Unidad } from 'src/app/interface/unidad';
import { CursoService } from 'src/app/Service/curso.service';
import { ContenidoUnidades } from 'src/app/interface/contenido-unidades';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private activeRouter: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }
  
  ngOnInit(): void {
    let cursoId = this.activeRouter.snapshot.paramMap.get('id');
    this.cursoService.findOne(cursoId).subscribe(
      data => this.datosCurso = data
      );
      this.unidades = this.datosCurso.unidades;
    }
    
      i: number = 0;
      j: number = 0;
      unidades: Array<Unidad>;
      urlSafe: SafeResourceUrl;
      datosCurso: Curso;
      pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
      video: boolean = true;
      videoId: string = "Nfj81ARo260";

  public cambiarVistaDocumento(url: string) {
    if (url.indexOf("www.youtube.com") == -1) {
      this.video = false;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.videoId = url.split('v=')[1].split('&')[0];
      this.video = true;
    }
  }

}
