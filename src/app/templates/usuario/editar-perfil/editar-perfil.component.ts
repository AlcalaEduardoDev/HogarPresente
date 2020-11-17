import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAlumnoService } from 'src/app/Service/user-alumno.service';
import {Alumno} from '../../../interface/alumno';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user:Alumno = new Alumno();

  constructor(
    private activatedRoute:ActivatedRoute,
    private dataUser:UserAlumnoService
  ) { }

  ngOnInit(): void { 
    this.loadUser();
   }

  loadUser():void{
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.dataUser.get(id).subscribe(
            as=> this.user = as
          );
        }
      }
    )
    
  }
  update(){
    this.dataUser.update(this.user).subscribe(
      e=> console.log('Datos modificados con exito!')
    );
  }
}
