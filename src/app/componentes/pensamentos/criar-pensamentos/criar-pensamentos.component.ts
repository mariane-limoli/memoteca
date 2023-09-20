import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  pensamento = {
    id: 1,
    conteudo:
      'O Angular é como um arquiteto experiente que organiza meticulosamente cada tijolo de um edifício, garantindo que a estrutura seja sólida e resistente.',
    autoria: 'ChatGPT',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {}
  cancelar() {}
}
