import { Component } from '@angular/core';

@Component({
  selector: 'app-formulas',
  imports: [],
  templateUrl: './formulas.component.html',
  styleUrl: './formulas.component.css'
})
export class FormulasComponent {

}
export function calcularCubo(lado: number): number {
  return Math.pow(lado, 3);
}

export function calcularPiramide(base: number, altura: number): number {
  return (1 / 3) * base * altura;
}

export function calcularCilindro(radio: number, altura: number): number {
  return Math.PI * Math.pow(radio, 2) * altura;
}

export function calcularEsfera(radio: number): number {
  return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

export function calcularTetraedro(area: number): number {
  return Math.sqrt(3) * Math.pow(area, 2);
}

export function convertirCelsius(fahrenheit: number): number {
  return (5 / 9) * (fahrenheit - 32);
}

export function convertirKelvin(celsius: number): number {
  return celsius + 273;
}

export function calcularCono(radio: number, altura: number): number {
  return (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;
}

export function calcularCuadratica(a: number, b: number, c: number, x: number): number {
  return (a * Math.pow(x, 2)) + (b * x) + c;
}

