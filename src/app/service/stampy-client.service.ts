import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StampyClientService {

  private url: string = '/api'
  
  constructor(private http: HttpClient) { }

  getStamps(): Observable<Stamp[]> {
    return this.http.get<Stamp[]>(`${this.url}/stamps`);
  }

  addStamp(name: string): Observable<Stamp> {
    return this.http.post<Stamp>(`${this.url}/stamps`, {name});
  }
}
