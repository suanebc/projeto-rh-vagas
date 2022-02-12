export class Vaga {
  id: number =  0;
  descricao: string =  "";
  img: string = "";
  req_obrigatorio: string = "";
  req_desejado:string = "";
  remunaracao: number = 0;
  beneficios: string = "";

  constructor(_id: number, descricao: string,img: string,req_obrigatorio: string, req_desejado:string, remunaracao: number, beneficios: string ) {
    this.id = _id;
    this.descricao = descricao;
    this.img = img;
    this.req_obrigatorio = req_obrigatorio;
    this.req_desejado = req_desejado;
    this.remunaracao = remunaracao;
    this.beneficios = beneficios;
  }
}
