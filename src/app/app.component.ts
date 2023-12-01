import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notepad';

  constructor(private route:Router){
    this.getInfo();
  }
  sessionuser:any;
  getInfo(){
    this.sessionuser=localStorage.getItem("myuser");
  }
  logged()
  {
    return this.sessionuser;
  }

  logout()
  {
    localStorage.removeItem("myuser");
    this.route.navigate(['login']);
    this.route.navigate(['signup']);
  }
}
