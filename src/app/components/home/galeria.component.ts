import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalmaterialComponent } from '../modalmaterial/modalmaterial.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  @Input('cartelera') peliculas;
  @Input('titulo') titulo;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
