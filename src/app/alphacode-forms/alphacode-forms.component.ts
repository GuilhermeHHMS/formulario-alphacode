import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user-service';
import { HttpHeaders } from '@angular/common/http';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-alphacode-forms',
  templateUrl: './alphacode-forms.component.html',
  styleUrls: ['./alphacode-forms.component.css'] // Correção aqui
})
export class AlphacodeFormsComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private userService: UserService, private formDataService: FormDataService) { }


  ngOnInit() {

    this.userService.lerDadosSalvos();
    this.userForm = new FormGroup({
      nomeContato: new FormControl(''),
      dataNascimento: new FormControl(''),
      email: new FormControl(''),
      profissao: new FormControl(''),
      telefoneContato: new FormControl(''),
      celularContato: new FormControl(''),
    });
  }



  submit() {
    
    const dadosFormulario = this.userForm.value;
    
    this.formDataService.setDadosFormulario(dadosFormulario);

    this.userService.enviarDadosFormulario(dadosFormulario).subscribe({
      next: (resposta) => {
        console.log('Resposta do servidor:', resposta);
        this.userService.lerDadosSalvos();
      },
      error: (erro) => {
        console.error('Erro ao enviar dados para o servidor:', erro);
      }
    });
    location.reload();
  }

}
