import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class EntriesService {
  url = 'http://127.0.0.1:8000/entries/';

  constructor(private authHttp: AuthHttp) {
  }

  getEntries() {
    return this.authHttp.get(this.url)
      .map(response => response.json());
  }

  create(resource) {
    return this.authHttp.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
  }

  update(resource) {
    return this.authHttp.patch(this.url + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())
  }

  delete(id) {
    return this.authHttp.delete(this.url + id)
      .map(response => response.json())
  }

}
