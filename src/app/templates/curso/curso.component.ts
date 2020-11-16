import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interface/curso'
import { Unidad } from 'src/app/interface/unidad';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import {ContenidoUnidades} from 'src/app/interface/contenido-unidades';



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  constructor( public dataService:ListaCursosService) { }
    pdfSrc ="";
    colorTexto = 'text-primary';
    video : boolean = true;  
    videoId : string = "Nfj81ARo260";
    curso : Curso = this.dataService.cursoActivo;
    unidades : Array<Unidad> = this.curso.unidades;
    i : number = 0;
    j : number = 0;
    //contUnidades : Array<ContenidoUnidades> = this.unidades[this.j].contUnidad;

    ngOnInit(): void {}
    
    public cambiarVistaDocumento( url:string){
      this.colorTexto = 'text-success';
      if ( url.indexOf("www.youtube.com")==-1){
          this.video=false;
          this.pdfSrc=url;
      } else{
        this.videoId = url.split('v=')[1].split('&')[0];
        this.video=true;
      }
  }

}
