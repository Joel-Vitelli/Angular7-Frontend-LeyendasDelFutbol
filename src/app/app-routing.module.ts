import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/components/home/home.component";
import { JugadorComponent } from "src/app/components/jugador/jugador.component";
import { JugadoresComponent } from "src/app/components/jugadores/jugadores.component";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";
import { AboutComponent } from "src/app/components/about/about.component";

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'jugador/:id', component: JugadorComponent },
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'jugador', component: JugadorComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
