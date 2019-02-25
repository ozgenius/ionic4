import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  getMessages(): Observable<Object> {
    return this.http.get('http://localhost:3000/messages');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/messages/${id}`);
  }
}
