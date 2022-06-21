import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  counter:number = 5;
  msg="Component Counter Value = ";
  min:number = 2;
  max:number = 7;
  
}
