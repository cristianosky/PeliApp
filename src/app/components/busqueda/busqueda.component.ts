import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PeliapiService } from 'src/app/services/peliapi.service';
import { ModalmaterialComponent } from '../modalmaterial/modalmaterial.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
    busqueda: FormGroup;
    peliculas: any;
    img= 'https://image.tmdb.org/t/p/w500';

    cargando: boolean;
  
    constructor(
    private fb: FormBuilder,
    private _cs:PeliapiService,
    public dialog: MatDialog
    ) { }
    
    get buscar(){
      return this.busqueda.get('buscar');
    }

    ngOnInit(): void {
      this.creatbucaqueda();
      this.cargando = false;
    }

    creatbucaqueda(){
    this.busqueda = this.fb.group({
      buscar: ['', Validators.required]
    })
    }

    buscarr(texto){
    if(texto.buscar){
      this._cs.buscarPelicula(texto.buscar).subscribe((resp:any)=>{
        if(resp.results.length > 1){
          this.peliculas = resp.results
          this.cargando = false
        }else{
          this.cargando = true
          this.peliculas=[]
        }

      })
    }else{
      return
    }
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
