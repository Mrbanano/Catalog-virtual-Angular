import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoContact } from '../interfases/info-contact.interfases';

@Injectable({
  providedIn: 'root',
})
export class InfopaginaService {
  info: infoContact = {};
  loading = false;

  constructor(private http: HttpClient) {
    this.http
      .get('assets/data/data-pages.json')
      .subscribe((resp: infoContact) => {
        console.log(resp);
        this.loading = true;
        this.info = resp;
      });
  }
}
