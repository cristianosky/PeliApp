import { Pipe, PipeTransform } from '@angular/core';
import { peliculain } from '../components/modalmaterial/modalmaterial.component';

@Pipe({
  name: 'controladordeimg'
})
export class ControladordeimgPipe implements PipeTransform {
  url = 'https://image.tmdb.org/t/p/w500';
  transform(pelicula: peliculain){
    if(pelicula.backdrop_path){
      // console.log(pelicula.backdrop_path);
      return this.url+pelicula.backdrop_path;
    } else {
        if(pelicula.poster_path){
          return this.url+pelicula.poster_path
        } else {
          return '../../../assets/img/No_image_3x4.svg.png'
        }
      }
    
    // return null;
  }

}
