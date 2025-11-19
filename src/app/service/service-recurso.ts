import { Injectable } from '@angular/core';
import { Recurso } from '../recurso';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceRecurso {

  private api: string = 'http://localhost:8080/qzwork_hub/recursos';

  constructor(private http: HttpClient) { }

  getRecursosList():Observable<Recurso[]> {
    return this.http.get<Recurso[]>(this.api);
  }
  
}
