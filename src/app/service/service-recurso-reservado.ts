import { Injectable } from '@angular/core';
import { RecursoReservado } from '../recurso-reservado';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceRecursoReservado {

  private api: string = 'http://localhost:8080/qzwork_hub/recursosReservados';
  
    constructor(private http: HttpClient) { }
  
    getRecursosReservadosList():Observable<RecursoReservado[]> {
      return this.http.get<RecursoReservado[]>(this.api);
    }
  
}
