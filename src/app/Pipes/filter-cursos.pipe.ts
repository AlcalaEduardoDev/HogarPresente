import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCursos'
})
export class FilterCursosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' || arg==null){
      return value;
    }
    
    const resultCursos = [];

    for(const curso of value){
      if(curso.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultCursos.push(curso);
      }
    }
    return resultCursos;

  }

}
