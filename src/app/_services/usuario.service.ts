import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../_modules/Response';
import { Usuario } from '../_modules/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlGet = environment.urlApiGet;

  constructor(private http : HttpClient)
  {}

  getUsuario() : Observable<Response<Usuario[]>>
  {
    return this.http.get<Response<Usuario[]>>(this.urlGet);
  }
}
