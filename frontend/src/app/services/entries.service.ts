import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class EntriesService {
  url = 'http://127.0.0.1:8000/entries/';

  constructor(private authHttp: AuthHttp) {
  }

  convertJSONDateToStr(date) {
    return date['year'] + '-' + date['month'] + '-' + date['day'];
  }

  getEntries() {
    return this.authHttp.get(this.url)
      .map(response => response.json());
  }

  onCreate(resource) {
    resource.date = this.convertJSONDateToStr(resource.date)
    return this.authHttp.post(this.url, resource)
      .map(response => response.json())
  }

  onUpdate(resource, id) {
    resource.date = this.convertJSONDateToStr(resource.date)
    return this.authHttp.patch(this.url + id, resource)
      .map(response => response.json())
  }

  onDelete(id) {
    console.log(id);
    return this.authHttp.delete(this.url + id)
      .map(response => response.json())
  }

}
