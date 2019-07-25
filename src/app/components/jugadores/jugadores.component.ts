import { Component, OnInit } from '@angular/core';
import { Jugador,JugadoresService } from "src/app/servicios/jugadores.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  
  selected:string ;

  //Arriba ejemplo
  jugadores:Jugador[] = [];

  constructor(private _jugadoresService:JugadoresService, private router:Router) { }

  ngOnInit() {
    this.jugadores = this._jugadoresService.getJugadores();
    console.log(this.jugadores);
    
  }

  
  public verJugador(idx:string){
    this.router.navigate(['/jugador', idx])
  }

  public getPosiciones(selected:string):Jugador[]{
    this.jugadores = this._jugadoresService.getJugadorXPosicion(selected);
    return this.jugadores;
  }

}
