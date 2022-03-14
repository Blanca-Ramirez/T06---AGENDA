import { Component } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventos: Evento[] = new Array();
  evento: Evento;
  public myForm: FormGroup;

  constructor(private eventoService: EventoService, private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      fecha: [''],
      nombre: [''],
      tipo: [''],
      cel: ['']
    });
   }

  public createEvento() { 
    this.evento = {
      fecha: this.myForm.controls.fecha.value,
      nombre: this.myForm.controls.nombre.value,
      tipo: this.myForm.controls.tipo.value,
      cel: this.myForm.controls.cel.value
    }
    this.eventoService.createEvento(this.evento);
    this.cleanInputs();
  }

  public cleanInputs(): void{ 
    this.myForm = this.formBuilder.group({
      fecha: [''],
      nombre: [''],
      tipo: [''],
      cel: ['']      
    });
  }


}
