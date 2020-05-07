import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor( public infoPages: InfopaginaService) {}

  ngOnInit(): void {}
}
