import { Component, OnInit } from '@angular/core';
import { PeliapiService } from 'src/app/services/peliapi.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalmaterialComponent, peliculain } from '../modalmaterial/modalmaterial.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tbusque:any;
  busqueda: FormGroup;
  generos: any;
  peliculas: any;
  cargando:boolean;
  PeliPopulares1:peliculain
  cartelera1:peliculain
  kids1:peliculain
  Buscadorb:boolean;
  lol:boolean;
  id:any
  pages:number
  tpages:number

  img= 'https://image.tmdb.org/t/p/w500';

  constructor(
    public _ps:PeliapiService,
    private fb: FormBuilder,
    public dialog: MatDialog
    ) { }
    

    ngOnInit(): void {
      this.populares();
      this.PeliPopulares1;
      this.cartelera();
      this.kids();
      this.cargando = false
      this.creatbucaqueda();
      this.Buscadorb = false;
      this.getgenero();
      this.lol = true;
      this.pages = 1
    
    }

    populares(){
      this._ps.getPopulares().subscribe((resp:any)=>{
        this.PeliPopulares1 = resp.results     
      })
    }

    kids(){
      this._ps.getkids().subscribe((resp:any)=>{
        this.kids1 = resp.results;
      })
    }

    creatbucaqueda(){
      this.busqueda = this.fb.group({
        buscar: ['', Validators.required]
      })
      }

    buscarg(id){
      this.lol = false
      this.id = id
      this._ps.peliculasg(id).subscribe((resp:any)=>{
        this.peliculas = resp.results;
        this.tpages = resp.total_pages
      });
    }

    cerrarg(){
      this.lol = true;
      this.id = "";
    }

    cartelera(){
    this._ps.gercartelera().subscribe((resp:any )=>{
      this.cartelera1 = resp.results
    })
    }

    peliin(id:string){
      const dialogRef  = this.dialog.open(ModalmaterialComponent,{
        // height: '95%',
        data:{
          id
        }
      });
    }

    buscarr(texto){
      if(texto.buscar){
        this.Buscadorb = true
        this._ps.buscarPelicula(texto.buscar).subscribe((resp:any)=>{
          if(resp.results.length > 1){
            this.peliculas = resp.results
            this.cargando = false
            this.tpages = resp.total_pages
            this.tbusque = texto.buscar
            this.pages = 1
          }else{
            this.cargando = true
            this.peliculas=[]
          }
        })
      }else{
        if(texto.buscar.length === 0){
          this.Buscadorb = false ;
        }  else {
          this.Buscadorb = true;
        }
        return
      }
    }

    getgenero(){
      this._ps.getGenero().subscribe( (resp:any) => {
        this.generos = resp.genres
      });
    }

    paguina(texto: string){
      let sumar = 1
      let restar = 1
      if(texto === 'siguiente'){
        this.pages = this.pages + sumar
      } else {
        this.pages = this.pages - restar
      }
      this._ps.pagues(this.id, this.pages).subscribe((resp:any)=>{
        this.peliculas = resp.results
      })
      window.scroll(0,0);
    }

    paginab(texto:string){
      let sumar = 1
      let restar = 1
      if(texto === 'siguiente'){
        this.pages = this.pages + sumar
      } else {
        this.pages = this.pages - restar
      }
      this._ps.pagesb(this.tbusque, this.pages).subscribe((resp:any)=>{
        this.peliculas = resp.results
      })
      window.scroll(0,0);
    }


}
