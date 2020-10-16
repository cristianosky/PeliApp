import { Component, OnInit } from '@angular/core';
import { PeliapiService } from 'src/app/services/peliapi.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalmaterialComponent, peliculain } from '../modalmaterial/modalmaterial.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  PeliPopulares1:peliculain
  cartelera1:peliculain
  kids1:peliculain

  img= 'https://image.tmdb.org/t/p/w500';

  constructor(
    public _ps:PeliapiService,
    public dialog: MatDialog
    ) { }
    

  ngOnInit(): void {
    this.populares();
    this.PeliPopulares1;
    this.cartelera();
    this.kids();
    
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


}
