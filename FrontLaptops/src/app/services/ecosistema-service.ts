import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcosistemaService {
  private url = 'http://localhost:8080/Zegarra';
  private http: HttpClient = inject(HttpClient);
  constructor() { }

  listCount(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "/laptops");
  }
}


