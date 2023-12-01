import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private ut:UserService,private route:Router)
    {
      this.getData();
      this.getInfo();
    }

    sessuser:any;
    getInfo()
    {
      this.sessuser=localStorage.getItem("myuser");
      if(this.sessuser)
      {
        this.route.navigate(['home']);
      }
      else
      {
        this.route.navigate(['login']);
        alert("You need to login");
      }
    }

    fdata=new FormGroup({
      name:new FormControl(''),
      task:new FormControl(''),
      date:new FormControl(''),
      day:new FormControl(''),
      time:new FormControl(''),
    });

    userdata:any;
    getData()
    {
      this.ut.getUser().subscribe(rs=>{
          this.userdata=rs;
      }); 
    }

    saveData(myvalue:any)
    {
      this.ut.saveUser(myvalue).subscribe(rs=>{
        alert("Save Successfull");
        this.getData();
        this.fdata.reset();
        location.reload();
      });
    }

    deleteData(id:any)
    {
      if(confirm("Do you want to delete this record?"))
      {
        this.ut.deleteUser(id).subscribe(rs=>{
          alert("delete successfull");
          this.getData();
        });
      }
    }

    userid:any;
    editData(x:any)
    {
      this.userid=x.id;
      this.fdata.controls.name.setValue(x.name);
      this.fdata.controls.task.setValue(x.task);
      this.fdata.controls.date.setValue(x.date);
      this.fdata.controls.day.setValue(x.day);
      this.fdata.controls.time.setValue(x.time);
    }

    Update()
    {
      this.ut.updateUser(this.userid,this.fdata.value).subscribe(res=>{
        this.getData();
        location.reload();
      });
    }
 
    p:number=1;


}
