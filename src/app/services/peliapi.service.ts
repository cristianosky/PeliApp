import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliapiService {

  private apikey:string = "bfe4ce62d4fa2973b8e8c1b56f57861c";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http:HttpClient ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url );
  }

  gercartelera(){
    let desde = new Date();
    let hasta = new Date();
    // let dia = hasta.getDate()

    hasta.setDate(hasta.getDate()+7);

    if(hasta.getDay.length < 2){
      hasta.setDate(hasta.getDate()+9);
    }

    let desdesStr= `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;



    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdesStr}&primary_release_date.lte=${hastaStr}&region=us&api_key=${ this.apikey }&language=es`;    return this.http.get(url);
  }

  getkids(){
    let url = `${this.urlMoviedb}/discover/movie?api_key=${ this.apikey }&language=es&primary_release_year=2020&sort_by=vote_average.desc`;
    return this.http.get(url);
  }

  getGenero(){
    let url = `${this.urlMoviedb}/genre/movie/list?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }


  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get(url);
  }

  pelicula(id:string){
    let url =`${this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;
    return this.http.get(url);
  }

  peliculasg(genero){
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&with_genres=${genero}&language=es`;
    return this.http.get(url);
  }

  pagues(genero, pagues){
    let url = `${this.urlMoviedb }/discover/movie?api_key=${this.apikey}&with_genres=${genero}&page=${pagues}&language=es`
    return this.http.get(url);
  }

  pagesb(texto, pagues){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&page=${pagues}&language=es`;
    return this.http.get(url);
  }
}
