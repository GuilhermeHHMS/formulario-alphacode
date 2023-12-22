import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../alphacode-table/alphacode-table.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  
  enviarDadosFormulario(dadosFormulario: any): Observable<any> {
    
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    });

    console.log(dadosFormulario);

    return this.http.post(`${this.apiUrl}/user_api.php?action=create`, dadosFormulario, {headers});
  }

  lerDadosSalvos(): Observable<User[]>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
  
    return this.http.get<User[]>(`${this.apiUrl}/user_api.php?action=read`, { headers });
  }

  atualizarDadosSalvos(id: any, dadosFormulario: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
  

    return this.http.post(`${this.apiUrl}/user_api.php?action=update&id=${id}`, dadosFormulario, { headers});

  }


  deletarDadosSalvos(id: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      });
  
      console.log('Dados a serem enviados:', id);

    return this.http.post(`${this.apiUrl}/user_api.php?action=delete&id=${id}`, null, { headers });

  }
}
