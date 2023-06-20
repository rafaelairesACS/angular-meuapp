import { Component, Output, EventEmitter } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome:string;
  adicionado = false;

  constructor(private funcionarioService : FuncionarioService){

  }

  adicionar(nome:string){
    this.funcionarioService.adicionar(nome)
  }

}
