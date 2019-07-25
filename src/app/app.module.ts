import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from "src/app/components/jugadores/jugadores.component";
import { JugadorComponent } from './components/jugador/jugador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JugadoresService} from "src/app/servicios/jugadores.service";

//Importo el modulo que contiene todos los imports que usare de Material
import { MaterialModule } from "src/app/material.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Swiper modulo
import { SwiperModule } from "angular2-useful-swiper";


@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    JugadorComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    MaterialModule, 
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
