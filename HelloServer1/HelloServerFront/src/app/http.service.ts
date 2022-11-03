import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HttpCustomService {

  message : string = 'default';
  parent : AppComponent | null = null;

  constructor(private http: HttpClient) {
  }

  public getHelloMessage(){
    this.http.get<MsgType>('http://localhost:8080/greeting-javaconfig').subscribe( msg =>
    {if(this.parent!=null){this.parent.message = msg.content}});
     return this.message;
  }
}

export interface MsgType {
  id: number;
  content: string;
}

