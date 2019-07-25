import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {

  private Jugadores:Jugador[] = [

    {
    id: "1",
    nombre: "Zidane",
    nacionalidad: "Francesa Argelina",
    fechaNacimiento: new Date(1972,6,23),
    posicion: "Mediocampista",
    biografia: "Zinedine Zidane nació el 23 de junio de 1972 en Marsella, Francia. Desde muy pequeño se le empezó a ver la afición que sentía por el deporte: le encantaba jugar al bádminton y practicar judo. Sin embargo, el deporte que más le llamaba la atención era el fútbol. Todos los fines de semana acudía al Stade Vélodrome, donde jugaba el equipo de su ciudad, el Olympique de Marsella. De todo la plantilla el jugador por el que más admiración sentía era el uruguayo Enzo Francescoli.",
    imagen: "assets/img/zidane.jpg"      
    },
    {
    id: "2",
    nombre: "Di Stéfano",
    nacionalidad: "Argentina",
    fechaNacimiento: new Date(1926,7,4),
    posicion: "Delantero",
    biografia: "Alfredo Stéfano Di Stéfano Laulhén​, más conocido como Alfredo Di Stéfano, fue un futbolista y entrenador argentino nacionalizado español,​ y jugador histórico de los clubes River Plate, Huracán, Millonarios, y Real Madrid. Desde el año 2000 hasta su fallecimiento fue presidente de honor de este último y al que debe sus mayores éxitos y reconocimientos mundiales. Es considerado por muchos expertos, periodistas, aficionados y exfutbolistas como uno de los mejores jugadores de todos los tiempos.​",
    imagen: "assets/img/distefano.jpg"      
    },
    {
    id: "3",
    nombre: "Beckenbauer",
    nacionalidad: "Alemania",
    fechaNacimiento: new Date(1945,10,11),
    posicion: "Defensor",
    biografia: "Franz Anton Beckenbauer es un exfutbolista y exdirector técnico alemán. Actualmente se desempeña como presidente honorario del Bayern de Múnich. Apodado El Káiser, es reconocido como uno de los mejores futbolistas de todos los tiempos y el más grande en su posición1​ y en la historia de su país. Fue el capitán de la selección alemana que ganó la Copa Mundial de Fútbol de 1974 y la Eurocopa 1972, así como el entrenador del mismo combinado que ganó el Mundial de Italia 1990. Obtuvo además una Recopa de Europa, tres Copas de Europa, una Copa Intercontinental, cuatro Bundesliga y cuatro Copas de Alemania con la camiseta del Bayern de Múnich. Ha sido galardonado con el Balón de Oro de Europa en 1972 y 1976. Ocupa el 3º lugar en el ranking del Mejor futbolista del siglo publicado por IFFHS en 2004.​",
    imagen: "assets/img/beckenbauer.jpg"      
    },
    {
    id: "4",
    nombre: "Cruyff",
    nacionalidad: "Ámsterdam",
    fechaNacimiento: new Date(1947,4,25),
    posicion: "Mediocampista",
    biografia: "Hendrik Johannes Cruijff, conocido internacionalmente como Johan CruyffNota,​ fue un jugador y entrenador de fútbol neerlandés. Es considerado por la IFFHS como el mejor jugador de Europa3​ y el segundo mejor jugador del siglo XX, detrás de Pelé.​ También fue elegido por 30 de los 34 ganadores del Balón de Oro (de 1956 a 1999) como el tercer mejor jugador del siglo XX, detrás de Pelé y Diego Armando Maradona.",
    imagen: "assets/img/cruyff.jpg"      
    },
    {
    id: "5",
    nombre: "Cristiano Ronaldo",
    nacionalidad: "Portuguesa",
    fechaNacimiento: new Date(1985,2,5),
    posicion: "Delantero",
    biografia: "Cristiano Ronaldo dos Santos Aveiro, más conocido como Cristiano Ronaldo, es un futbolista portugués que juega como delantero en la Juventus de Turín de la Serie A de Italia y en la selección de Portugal, de la que es capitán. Identificado habitualmente en los medios de comunicación con el numerónimo CR7,​ es frecuentemente considerado el mejor y más completo futbolista y goleador del mundo9​ y uno de los mejores de todos los tiempos,​ por un elevado número de personas y prensa vinculadas al deporte,​ así como también una de las figuras más mediáticas de su generación. Es, con 450 goles,12​ el máximo goleador histórico del Real Madrid Club de Fútbol, consiguiéndolo en las nueve temporadas que jugó en este club.",
    imagen: "assets/img/cristiano ronaldo.jpg"      
    },
    {
    id: "6",
    nombre: "Messi",
    nacionalidad: "Argentina",
    fechaNacimiento: new Date(1987,6,24),
    posicion: "Delantero",
    biografia: "Lionel Andrés Messi Cuccittini, conocido como Leo Messi,​ es un futbolista argentino que juega como delantero o centrocampista. Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección argentina, de la que es capitán. Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,​ es el primer futbolista en la historia que ha ganado, entre otras distinciones, cinco veces el Balón de Oro –un Balón de Oro y cuatro FIFA Balón de Oro– obteniendo los cuatro primeros de forma consecutiva; además de recibir cinco Botas de Oro. Con el Barcelona ha ganado 34 títulos, entre ellos, diez de La Liga y cuatro de la Liga de Campeones de la UEFA, así como seis títulos de la Copa del Rey.",
    imagen: "assets/img/messi.jpg"      
    },
    {
    id: "7",
    nombre: "Ronaldo",
    nacionalidad: "Brasileña",
    fechaNacimiento: new Date(1976,9,22),
    posicion: "Mediocampista",
    biografia: "Ronaldo Luís Nazário de Lima, conocido deportivamente como Ronaldo, o Ronaldo Nazário,​ es un exfutbolista brasileño que jugaba de delantero. Es el actual dueño y presidente del consejo del equipo español de fútbol Real Valladolid y fue un futbolista que destacó entre otros equipos en el Real Madrid y en el F.C. Barcelona. Conocido como «o fenômeno», es considerado por diversos organismos, personajes y medios vinculados al deporte, como el mejor centro delantero de la historia del fútbol, así como uno de los mejores y más prolíficos atacantes. En su plenitud deportiva destacaba por su velocidad, su dribbling y su definición, hechos por los que fue incluido por la FIFA en el salón de la fama del fútbol en el año 2016.",
    imagen: "assets/img/ronaldo.jpg"      
    },
    {
    id: "8",
    nombre: "Ronaldinho",
    nacionalidad: "Brasileña",
    fechaNacimiento: new Date(1980,3,21),
    posicion: "Mediocampista",
    biografia: "Ronaldo de Assis Moreira, conocido deportivamente como Ronaldinho, es un exjugador de fútbol brasileño nacionalizado español. Es mundialmente reconocido como uno de los talentos más grandes en la historia de dicho deporte. Es hijo de João de Assis Moreira, y su representante fue su hermano Roberto de Assis Moreira. Su carrera como futbolista cubrió algo más de veinte años (1997- 2018). Debutó como futbolista profesional en el club Grêmio de Porto Alegre, pero desarrolló gran parte de su carrera futbolista en Europa, donde jugó en el París Saint-Germain, F. C. Barcelona y A. C. Milan. Se dio a conocer principalmente en el club español, equipo en el que permaneció durante cinco temporadas y recibió el reconocimiento mundial por parte de la prensa, jugadores y varios organismos deportivos.",
    imagen: "assets/img/ronaldinho.jpg"      
    },
    {
    id: "9",
    nombre: "Pele",
    nacionalidad: "Brasileña",
    fechaNacimiento: new Date(1977,10,1),
    posicion: "Delantero",
    biografia: "Edson Arantes do Nascimento, más conocido como Pelé, es un exfutbolista brasileño reconocido por la mayoría de los especialistas, periodistas, exfutbolistas y aficionados como el «mejor futbolista de la historia», así como el «mejor jugador histórico» del club Santos de Brasil y de la selección brasileña. En 1999 el Comité Olímpico Internacional lo distinguió como el «mejor deportista del siglo XX». En 2000 fue elegido como el «mejor futbolista del siglo XX» con el 73 % en una votación realizada por los miembros de la Comisión de Fútbol de la FIFA y los suscriptores de la Revista FIFA, por la Federación Internacional de Historia y Estadística de Fútbol, así como en una encuesta respondida por los ganadores del Balón de Oro.",
    imagen: "assets/img/pele.jpg"      
    },
    {
    id: "10",
    nombre: "Maradona",
    nacionalidad: "Argentina",
    fechaNacimiento: new Date(1960,10,30),
    posicion: "Mediocampista",
    biografia: "Diego Armando Maradona Franco es un exfutbolista y actual director técnico argentino. Actualmente dirige a Dorados de Sinaloa de la Liga de Ascenso de México.11​ Es presidente honorario del Dinamo Brest (de la Liga Premier de Bielorrusia). Es reconocido por muchos especialistas, periodistas, exfutbolistas y aficionados como el «mejor futbolista de la historia». Asimismo, ha sido catalogado como el mejor jugador de la historia de los mundiales, ha sido elegido como el «mejor futbolista del siglo XX» con el 54 % en una votación pública realizada en el cibersitio de la FIFA y obtuvo la tercera ubicación con el 6 % en una encuesta respondida por los miembros de su Comisión de Fútbol y los suscriptores de la Revista FIFA.",
    imagen: "assets/img/maradona.jpg"      
    },

    
  ];

  constructor() { }

  public getJugadores():Jugador[]{
    return this.Jugadores;
  }

  public getJugadorXId(idx:string):Jugador{
    for (let jugador of this.Jugadores){
      if(jugador.id == idx){
        return jugador;
      }
    }

  }

  public getJugadorXPosicion(selected:string):Jugador[]{
    let jugadoresArr:Jugador[] =[];
    for (let jugador of this.Jugadores){
      let posicion = jugador.posicion;
      if(posicion == selected){
        jugadoresArr.push(jugador);
      }
    }
    return jugadoresArr;
  }
  
  

}
export interface Jugador{
  id:string;
  nombre:string;
  nacionalidad:string;
  fechaNacimiento:Date;
  posicion:string;
  biografia:string;
  imagen:string;  
}
