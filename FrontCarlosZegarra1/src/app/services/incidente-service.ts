import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {
  private url = 'http://localhost:8080/api';
  private http: HttpClient = inject(HttpClient);
  constructor() { }

  listCount(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/incidentes");
  }
}
