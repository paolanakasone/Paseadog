import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxis',
  templateUrl: './taxis.component.html',
  styleUrls: ['./taxis.component.css']
})
export class TaxisComponent implements OnInit {

title='pasea dog';
paseador='';
  constructor() { }

  ngOnInit() {
  }
  pasear(){
    alert("pasear");
  }

}
