import { Component } from '@angular/core';
import { HttpCustomService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polman si Cezar';
  message : string = 'ok';
  

  constructor(private service: HttpCustomService){
	service.parent = this;
	this.message = service.getHelloMessage();
  }


}