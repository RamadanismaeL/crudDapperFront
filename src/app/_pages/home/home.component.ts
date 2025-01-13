import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../_services/usuario.service';
import { Usuario } from '../../_modules/Usuario';
import { UsuarioDelete } from '../../_modules/UsuarioDelete';

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
  usuarioDelete : UsuarioDelete[] = [];

  constructor(private serveUsuario : UsuarioService)
  {}

  ngOnInit(): void {
    this.serveUsuario.getUsuario().subscribe(response => {
      this.usuarios = response.dados;
      this.usuariosGeral = response.dados;

      this.usuarioDelete = response.dados;

      console.log(response);
    });
  }

  search(event : Event)
  {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    //const value = target.value

    console.log("TARGET: ", target);
    console.log("VALUE: ", value);

    this.usuarios = this.usuariosGeral.filter(usuario => {
      return usuario.nomeCompleto.toLowerCase().includes(value);
    });
  }

  deletar(event : Event)
  {
    this.serveUsuario.DeletarUsuario().subscribe(response => {
      console.log(response);
      console.log("Usuario Eliminado");
    })
  }
}
