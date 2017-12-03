import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class EntriesService {

  constructor(private authHttp: AuthHttp) {
  }

  getEntries() {
    return this.authHttp.get('http://127.0.0.1:8000/entries/')
      .map(response => response.json());
  }
}
