import { Component, OnInit } from '@angular/core';
import { Treinador } from '../treinador';
import { TREINADORES } from '../mock-treinador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
  }

  treinador : Treinador = TREINADORES[0];

}
