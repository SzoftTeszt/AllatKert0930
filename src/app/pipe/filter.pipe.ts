import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb:any[], keresendo:string): any {
    if (!keresendo) return tomb;
    keresendo=keresendo.toLowerCase();
    return tomb.filter(
      (elem:any)=>         
        elem.nev.toLowerCase().includes(keresendo)  
      )   
  }

}
