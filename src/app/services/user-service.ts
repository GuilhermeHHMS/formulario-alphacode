import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, switchMap, throwError } from 'rxjs';
import { User } from '../alphacode-table/alphacode-table.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private listaAtualizada = new BehaviorSubject<User[]>([]);
  listaAtualizada$ = this.listaAtualizada.asObservable();

  // ...

  


  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  enviarDadosFormulario(dados: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/create.php`, dados, { headers })
   
  }

  lerDadosSalvos(): Observable<User[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<User[]>(`${this.apiUrl}/read.php`, { headers });
  }

  atualizarDadosSalvos( dadosFormulario: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
      responseType: 'text' as 'json', // Set the responseType to 'text'
    };
    
    
    return this.http.post(`${this.apiUrl}/update.php`, dadosFormulario, options);
  }


  deletarDadosSalvos(id: string): Observable<User[]> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    const body = { id: id };
    return this.http.post<any>(`${this.apiUrl}/delete.php`, body, { headers })

}
}
