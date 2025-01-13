import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../_modules/Response';
import { Usuario } from '../_modules/Usuario';
import { UsuarioDelete } from '../_modules/UsuarioDelete';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlGet = environment.urlApiGet;
  urlDelete = environment.urlApiDelete;

  constructor(private http : HttpClient)
  {}

  getUsuario() : Observable<Response<Usuario[]>>
  {
    return this.http.get<Response<Usuario[]>>(this.urlGet);
  }

  DeletarUsuario() : Observable<Response<UsuarioDelete[]>>
  {
    /* Se o URL da API tiver Parâmetro
    * return this.http.delete<Response<Usuario[]>>(`${this.urlDelete}?usuarioId=${id}`);
    */
   return this.http.delete<Response<UsuarioDelete[]>>(this.urlDelete);
  }
}
