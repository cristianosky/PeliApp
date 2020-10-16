import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    
    {path: 'buscar', component: BusquedaComponent},

    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }