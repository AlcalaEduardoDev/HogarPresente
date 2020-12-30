import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interface/curso';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor(
    private listaCursosService: CursoService,
    private spinner: NgxSpinnerService,

    private dataToken: TokenService
  ) { }
  p = '';
  filter = "";
  public cursos: Array<Curso> = [];
  public cursosHabilitados: Array<Curso> = [];
  public cursosInhabilitados: Array<Curso> = [];
  isAdmin: boolean = false;
  isCapacitador: boolean = false;
  faSearch = faSearch;

  ngOnInit(): void {
    this.spinner.show();
    this.listaCursosService.findAll().subscribe((response: Array<Curso>) => {
        this.cursos = response;
        console.log(this.cursos);
        this.separarCursos();
        this.spinner.hide();
      }
      );
    if (this.dataToken.getToken()) {
      if (this.authAdmin()) {
        this.isAdmin = true;
      } else this.isAdmin = false;
    }
    if (this.dataToken.getToken()) {
      if (this.authCapacitador()) {
        this.isCapacitador = true;
      } else this.isCapacitador = false;
    }
  }

  separarCursos() {
    for (const curso of this.cursos) {
      if (curso.habilitado == true) {
        this.cursosHabilitados.push(curso);
      } else {
        this.cursosInhabilitados.push(curso);
      }
    }

  }
  authAdmin(): boolean {
    var roles: string[] = this.dataToken.getAuthorities();
    if (roles.includes('ROLE_ADMIN')) {
      return true;
    } else return false;
  }
  authCapacitador(): boolean {
    var roles: string[] = this.dataToken.getAuthorities();
    if (roles.includes('ROLE_CAPACITADOR')) {
      return true;
    } else return false;
  }

}