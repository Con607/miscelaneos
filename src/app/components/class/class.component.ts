import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: []
})
export class ClassComponent implements OnInit {

  alerta:string = 'alert-danger';
  loading:boolean = false;

  propiedades:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutarProceso() {
    this.loading = true;
    setTimeout( ()=> this.loading = false, 3000 );
    // console.log('ejecutarProceso esta siendo ejecutado');
  }

}
