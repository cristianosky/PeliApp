import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PeliapiService } from 'src/app/services/peliapi.service';
import { ModalmaterialComponent } from '../modalmaterial/modalmaterial.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
    peliculas: any;
    img= 'https://image.tmdb.org/t/p/w500';
    generot:string;
    ggnero:any
    id:any

    cargando: boolean;
    
    constructor(
    private _cs:PeliapiService,
    public dialog: MatDialog,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      this.getgenero();
      this.cargando = false;
      this.buscarr();
    }

    buscarr(){
      const id = this.route.snapshot.paramMap.get('id');
      this._cs.peliculasg(id).subscribe((resp:any)=>{
        this.peliculas = resp.results
      });
    }

    getgenero(){
      const id = this.route.snapshot.paramMap.get('id');
      this.id = id
      this._cs.getGenero().subscribe((resp:any)=>{
        this.ggnero = resp.genres
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
  }
