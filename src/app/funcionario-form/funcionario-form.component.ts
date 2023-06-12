import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'rafael'

  adcionado = false;
  @Output('cirado') funcionarioAdcionado = new EventEmitter();

  adicionar() {
    this.adcionado = true
    
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdcionado.emit(funcionario)
  }

}
