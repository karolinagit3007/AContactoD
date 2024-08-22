import { Component } from '@angular/core';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {

  imagenes: string []=[
    'imagenes/imgEmpresarial.jpg',
    'imagenes/ofertaUno.jpg',
    'imagenes/ofertaDos.jpg',
    'imagenes/ofertaTres.jpg',
    'imagenes/ejecutivaUno.jpg',
    'imagenes/ejecutivoDos.avif',
    'imagenes/ejecutivaTres.jpg',
    'imagenes/panicError404.gif',
  ];
}