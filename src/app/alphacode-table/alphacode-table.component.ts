import { Component,} from '@angular/core';
import { UserService } from '../services/user-service';
import { FormDataService } from '../services/form-data.service';


@Component({
  selector: 'app-alphacode-table',
  templateUrl: './alphacode-table.component.html',
  styleUrls: ['./alphacode-table.component.css']
})
export class AlphacodeTableComponent {

  users?: User[];
  
  constructor(private userService: UserService, private formDataService: FormDataService) { }
  
  ngOnInit() {
    
    this.exibirCadastro();
  }

  exibirCadastro() {
    this.userService.lerDadosSalvos().subscribe({
      next: (response: User[]) => {
        if (Array.isArray(response)) {
          this.users = response;
          console.log('Dados lidos:', this.users);

        } else {
          console.error('A resposta do servidor não é um array:', response);
        }
      },
      error: (error) => {
        console.error('Erro ao ler dados:', error);
      }
    });

  }

  atualizarCadastro(tableUser: User) {
    this.formDataService.setDadosFormulario(tableUser);

    this.userService.atualizarDadosSalvos(tableUser).subscribe({
      next: (response: User[]) => {
        this.users = response;
        console.log('Dados atualizados:', this.users);

      },
      error: (error) => {
        console.error('Erro ao ATUALIZAR dados:', error);
      },
      complete: () => {
        this.exibirCadastro();
      }
    });
    // location.reload();
  }

  deletarCadastro(tableUser: User) {

    console.log(tableUser.id);
    this.userService.deletarDadosSalvos(tableUser.id).subscribe({
      next: () => {
        this.users = this.users!.filter(u => u.id !== tableUser);
        console.log('Usuário deletado:', tableUser);
   
      },
      error: (error) => {
        console.error('Erro ao DELETAR dados:', error);
      },
      complete: () => {
        this.exibirCadastro();
      }
    });
    location.reload();
  }
}

export class User {
  id: any;
  nomeContato: string;
  dataNascimento: string;
  email: string;
  profissao: string;
  telefoneContato: string;
  celularContato: string;

  constructor(id: any, nomeContato: string, dataNascimento: string, email: string, profissao: string, telefoneContato: string, celularContato: string) {
    this.id = id;
    this.nomeContato = nomeContato;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.profissao = profissao;
    this.telefoneContato = telefoneContato;
    this.celularContato = celularContato;
  }
}
