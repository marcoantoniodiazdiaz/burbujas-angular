import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contendor',
  templateUrl: './contendor.component.html',
  styleUrls: ['./contendor.component.css']
})
export class ContendorComponent {

  lista = ['Marco', 'Daniel', 'Jose', 'Pedro'];
  objectList = [
    {
      nombre: 'Marco Antonio',
      edad: 20,
      peso: 62,
    },
    {
      nombre: 'Daniel Diaz',
      edad: 55,
      peso: 78,
    },
    {
      nombre: 'Sergio Plasencia',
      edad: 45,
      peso: 68,
    },
  ];

  verTabla = false;

  constructor() { }

  cambiarVerTabla(): void {
    this.verTabla = !this.verTabla;
  }

  agregarALista(nombre: string): void {
    this.lista.push(nombre);
  }

}
