import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","","", 0, "");
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService, private router: Router) { }

  ngOnInit(): void {}

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", "", 0, "")},
      err => {console.log("erro ao cadastrar")}
    );
      this.router.navigate(['/mural']);
    // window.location.href = "/mural";

  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"", "","", "", 0, "")},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","","",0,"" )},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }


}
