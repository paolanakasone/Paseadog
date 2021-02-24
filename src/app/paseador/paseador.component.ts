import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-paseadog',
  templateUrl: './paseador.component.html',
  styleUrls: ['./paseador.component.css']
})
export class PaseadorComponent implements OnInit {

  mascota="nikko"
  constructor() { }

  ngOnInit() {
  }

  jugar(){
    alert("Vamos a jugar");
  }

}
