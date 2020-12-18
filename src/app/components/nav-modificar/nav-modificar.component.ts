import { Component, Input, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { UnidadService } from 'src/app/Service/unidad-service.service';
import { Unidad } from '../../Interface/unidad';

@Component({
  selector: 'app-nav-modificar',
  templateUrl: './nav-modificar.component.html',
  styleUrls: ['./nav-modificar.component.css']
})
export class NavModificarComponent implements OnInit {

  @Input() unidades:Array<Unidad>;
  constructor(
    private unidadService : UnidadService,
  ) {}

   ngOnInit(): void {
     console.log(this.unidades);
    }
    
  i : number =0;
  active:number;
  nombreUnidad : string;
  descripcionUnidad : string;
  textareaNombreUnidad: boolean = false;
  textareaDescripcionUnidad : boolean = false;

  activarTextareaNombreUnidad(){
    if(this.textareaNombreUnidad){
      this.textareaNombreUnidad=false
    } else this.textareaNombreUnidad = true
  }
  activarTextareaDescripcionUnidad(){
    if (this.textareaDescripcionUnidad){
      this.textareaDescripcionUnidad = false
    } else this.textareaDescripcionUnidad = true
  }
  updateNombreUnidad(id){
    this.unidadService.updateNombre(id, this.nombreUnidad).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
  updateDescripcionUnidad(id){
    this.unidadService.updateDescripcion(id, this.descripcionUnidad).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
}
