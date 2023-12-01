import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private http:HttpClient,private route:Router){

  }
  fdata=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
   
  });

  doSign()
  {
      this.http.get<any>("http://localhost:3000/remuser/").subscribe(res=>{
          const user=res.find((a:any)=>{
              return a.username==this.fdata.controls.username.value && a.password==this.fdata.controls.password.value;
          });
          if(user)
          {
            alert("login success");
            //alert(user.username);
            localStorage.setItem("myuser",user.username);
            this.route.navigate(['home']);
            location.reload();
          }
          else
          {
            alert("invalid credentials");
          }
      });

}
}
