import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class EntriesService {

  constructor(private authHttp: AuthHttp) {
  }

  getEntries() {
    return this.authHttp.get('/entries')
      .map(response => response.json());
  }
}
