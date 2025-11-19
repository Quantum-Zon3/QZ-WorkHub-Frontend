import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private api: string = 'http://localhost:8080/qzwork_hub/usuarios';

  constructor(private http: HttpClient) { }

  getUsuariosList():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api}/login`, {
      email,
      password
    });
  }
}
