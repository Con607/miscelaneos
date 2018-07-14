import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>
  <br><br>

  <app-css></app-css>

  <p>Hola mundo...</p>

  <app-class></app-class>

  <br><br>

  <p [appResaltado]="'orange'">Utilizando una directiva para cambiar el color de fondo</p>

  <br><br>

  <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error("Method not implemented.");
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    // throw new Error("Method not implemented.");
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    // throw new Error("Method not implemented.");
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    // throw new Error("Method not implemented.");
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    // throw new Error("Method not implemented.");
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    console.log("ngOnDestroy");
  }

}
