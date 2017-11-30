import { Injectable } from '@angular/core';
import { AuthHttp } from "ng2-jwt/ng2-jwt";

@Injectable()
export class EntriesService {

  constructor(private authHttp: AuthHttp) {
  }

  getEntries() {
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
