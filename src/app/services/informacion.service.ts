import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }

  getInformacion(): Promise<any> {
    return this.http.get('https://reqres.in/api/users?delay=3').toPromise();
  }
}
