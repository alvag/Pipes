import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrar'
})
export class MostrarPipe implements PipeTransform {

  transform(value: any, activar:boolean = true): any {
    let texto = value;
    let xxx:string;

    if(!activar){
      let nuevoTexto:string = '';
      for (let i = 0; i <texto.length; i++) {
          nuevoTexto += '*';
      }
      texto = nuevoTexto;
    }
    return texto;
  }

}
