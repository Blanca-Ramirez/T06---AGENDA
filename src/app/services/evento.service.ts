import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventos: Evento[] = new Array();
  constructor() { }

  public getEventos(){
    return this.eventos;  
  }

  public createEvento(evento: Evento) { 
    this.eventos.push(evento);
  }

}
