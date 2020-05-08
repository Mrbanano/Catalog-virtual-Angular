import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoContact } from '../interfases/info-contact.interfases';
import { infoTeam } from '../interfases/info-team.interfases';


@Injectable({
  providedIn: 'root',
})
export class InfopaginaService {
  info: infoContact = {};
  loading = false;
  loadingTeam = true;
  team: infoTeam = {};

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http
      .get('assets/data/data-pages.json')
      .subscribe((resp: infoContact) => {
        this.loading = true;
        this.info = resp;
      });
  }

  private loadTeam() {
    return new Promise((resolve, rejects) => {
      this.http
        .get('https://catalog-virtual-angular.firebaseio.com/equipo.json')
        .subscribe((resp: infoTeam) => {
          this.team = resp;
          this.quickLoading();
        });
    });
  }
  quickLoading() {
      setTimeout(() => {
        this.loadingTeam = false;
      }, 3000);
  }
}
