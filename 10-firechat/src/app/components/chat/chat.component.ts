import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Mensaje } from 'src/app/interface/mensaje.interface';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) {

    this._cs.cargarMensajes().subscribe(() => {
      setTimeout(() => { this.elemento.scrollTop = this.elemento.scrollHeight; }, 100);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    } else {
      this._cs.agregarMensaje(this.mensaje)
        .then(() => this.mensaje = "")
        .catch((err) => console.error('error al enviar', err));
    }

  }

}
