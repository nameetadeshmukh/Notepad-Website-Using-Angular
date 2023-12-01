import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhynoteComponent } from './whynote/whynote.component';
import { PnfComponent } from './pnf/pnf.component';
import { LoginComponent } from './login/login.component';
import { HComponent } from './h/h.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/whynote',pathMatch:'full'},
  {path:'whynote',component:WhynoteComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'h',component:HComponent},
  {path:'signup',component:SignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
