export interface Usuario {
  id? : number;
  nomeCompleto : string;
  email : string;
  cargo : string;
  salario : number;
  cpf : string;
  situacao : boolean;
  senha : string;
}