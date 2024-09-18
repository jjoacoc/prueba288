import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost/muni/api'; // URL de tu backend PHP

  constructor(private http: HttpClient) {}

  // Método para obtener los datos
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }

  // Método para enviar datos a través de POST
  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
