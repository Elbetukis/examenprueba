import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasComponent,
  calcularCubo,
  calcularPiramide,
  calcularCilindro,
  calcularEsfera,
  calcularTetraedro,
  convertirCelsius,
  convertirKelvin,
  calcularCono,
  calcularCuadratica } from './formulas.component';

describe('FormulasComponent', () => {
  let component: FormulasComponent;
  let fixture: ComponentFixture<FormulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('Pruebas para las fórmulas matemáticas', () => {
  it('Debería calcular el cubo correctamente', () => {
      expect(calcularCubo(3)).toBe(27);
  });

  it('Debería calcular el volumen de una pirámide correctamente', () => {
      expect(calcularPiramide(6, 9)).toBe(18);
  });

  it('Debería calcular el volumen de un cilindro correctamente', () => {
      expect(calcularCilindro(2, 5)).toBeCloseTo(62.832, 3);
  });

  it('Debería calcular el volumen de una esfera correctamente', () => {
      expect(calcularEsfera(3)).toBeCloseTo(113.097, 3);
  });

  it('Debería calcular el volumen de un tetraedro correctamente', () => {
      expect(calcularTetraedro(2)).toBeCloseTo(6.928, 3);
  });

  it('Debería convertir de Fahrenheit a Celsius correctamente', () => {
      expect(convertirCelsius(32)).toBe(0);
  });

  it('Debería convertir de Celsius a Kelvin correctamente', () => {
      expect(convertirKelvin(0)).toBe(273);
  });

  xit('Debería calcular el volumen de un cono correctamente', () => {
      expect(calcularCono(3, 6)).toBeCloseTo(56.548, 3);
  });

  it('Debería calcular la ecuación cuadrática correctamente', () => {
      expect(calcularCuadratica(1, -3, 2, 1)).toBe(0);
  });
});
