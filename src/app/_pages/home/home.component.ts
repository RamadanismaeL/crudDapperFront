import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../_services/usuario.service';
import { Usuario } from '../../_modules/Usuario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit
{
  usuarios : Usuario[] = [];
  usuariosGeral : Usuario[] = [];

  constructor(private serveUsuario : UsuarioService)
  {}

  ngOnInit(): void {
    this.serveUsuario.getUsuario().subscribe(response => {
      this.usuarios = response.dados;
      this.usuariosGeral = response.dados;
      console.log(response);
    });
  }
}
