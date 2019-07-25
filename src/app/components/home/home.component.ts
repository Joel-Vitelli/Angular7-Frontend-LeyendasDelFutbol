import { Component, OnInit } from '@angular/core';
import { Jugador, JugadoresService } from 'src/app/servicios/jugadores.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jugadores:Jugador[] = [];

  config: SwiperOptions = {

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',   
    freeMode: true,
    speed: 300,
    autoplay: 3000,
    autoplayStopOnLast: false,
    autoplayDisableOnInteraction: false,
    initialSlide: 1, // Slide Index Starting from 0
    loop: true,
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 100 // Space between each Item
  };

  constructor(private _jugadoresService:JugadoresService) { 
    
  }

  ngOnInit() {

    this.jugadores= this._jugadoresService.getJugadores();
    console.log(this.jugadores);
    
  }

  

}
