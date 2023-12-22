import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private dadosFormulario: any;

  setDadosFormulario(dados: any) {
    this.dadosFormulario = dados;
  }

  getDadosFormulario() {
    return this.dadosFormulario;
  }
}
