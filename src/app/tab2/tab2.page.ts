import { Component } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public eventos: Evento[] = new Array();
  
  constructor(private eventoService: EventoService) { 
    this.eventos = this.eventoService.getEventos();
  }
  
  // public call(numero: string) { 
  //   this.callNumber.callNumber('52'+numero, true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));
  // }
}
