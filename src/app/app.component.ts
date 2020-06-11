import { Component, OnInit } from '@angular/core';
import * as bisoft12 from '../assets/classData.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JSon Reader';

  objJsClase: any = (bisoft12 as any).default;
  temasInvestigacion: any = this.objJsClase["Temas investigación"];
  estudiantes: any = this.objJsClase["Estudiantes"];

  constructor(){}
  ngOnInit(){
    console.log(bisoft12);
  }
}