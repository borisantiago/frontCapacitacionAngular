import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {


  transform(value: any[], ...args: any[]): any[] {
    let termino = args[0];
    let filtrado : any[]=[];
    //value.map( p => {
    value.forEach( p => {
      if(p.director == termino){
        filtrado.push(p); 
      } 
    })
    return filtrado;
  }

}
