

import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interface/curso';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor(
    private listaCursosService:CursoService,
    private dataToken: TokenService
    ) { }
  p='';
  filter="";
  public cursos:Array<Curso>=[];
    isAdmin : boolean = false;

  ngOnInit(): void {
    this.listaCursosService
    .findAll()
    .subscribe((response: Array<Curso>) =>{
      this.cursos=response;
      console.log(this.cursos);
    }
    );
    if(this.dataToken.getToken()){
      if(this.authAdmin()){
        this.isAdmin = true;
        console.log("El usuario es administrador")
      }else this.isAdmin = false;
    }
  }

  authAdmin(): boolean{
    var roles:string[]=this.dataToken.getAuthorities();
    if(roles.includes('ROLE_ADMIN')){
      return true;
    } else return false;
  }

}