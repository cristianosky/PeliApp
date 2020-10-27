import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeliapiService } from 'src/app/services/peliapi.service';
import Swal from 'sweetalert2'

export interface peliculain{
  id: string,
  title: string,
  overview: string,
  backdrop_path: string,
  release_date: string,
  poster_path: string
}

@Component({
  selector: 'app-modalmaterial',
  templateUrl: './modalmaterial.component.html',
  styleUrls: ['./modalmaterial.component.css']
})
export class ModalmaterialComponent implements OnInit {

  peliculas: peliculain
  

  img:string;

  constructor(
    public dialogRef: MatDialogRef<ModalmaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _ps:PeliapiService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialopeli();
    this.cargando();
    this.peliculas = {
      id:"",
      title: "",
      overview: "",
      backdrop_path: "",
      release_date: "",
      poster_path: ""
    }
    this.img = 'https://image.tmdb.org/t/p/w400';
  }

  dialopeli(){
    this._ps.pelicula(this.data.id).subscribe((resp:peliculain)=>{
      this.peliculas = resp;
      Swal.close();
    })
  }

  cargando(){
    Swal.fire({
      icon: 'info',
      title: 'Cargando',
      text: 'Obeniendo infomacion de la pelicula',   
      allowOutsideClick: false
    })
    Swal.showLoading()
  }

  cerrar(){
    this.dialog.closeAll();
  }

}
