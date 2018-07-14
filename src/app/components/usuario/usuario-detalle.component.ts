import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.parent.params.subscribe( params => {
    });
  }

  ngOnInit() {
  }

}
