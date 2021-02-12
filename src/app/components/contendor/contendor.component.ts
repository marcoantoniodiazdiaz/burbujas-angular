import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-contendor',
  templateUrl: './contendor.component.html',
  styleUrls: ['./contendor.component.css']
})
export class ContendorComponent {

  lista = ['Marco', 'Daniel', 'Jose', 'Pedro'];
  objectList = [];
  loading = true;

  constructor(private informacionService: InformacionService) {
    this.traerInformacion();
  }

  traerInformacion(): void {
    this.informacionService.getInformacion().then((resp) => {
      this.objectList = resp.data;
      this.loading = false;
    });
  }

  agregarALista(nombre: string): void {
    this.lista.push(nombre);
  }

}
