import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root',
})

export class PeliculasService {

  private apikey:string = "bfe4ce62d4fa2973b8e8c1b56f57861c";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp( url, 'callback' ).subscribe(resp=>{
      console.log(resp);
    })
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    console.log(url);
    return this.http.jsonp(url, 'callback').subscribe(resp=>{
      console.log(resp);
    })
  }

}
