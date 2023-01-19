import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterComponent } from './enter/enter.component';
import { HomeComponent } from './home/home.component';
import { DrawingComponent } from './drawing/drawing.component';
import { PaintingComponent } from './painting/painting.component';
import { DigitalComponent } from './digital/digital.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistComponent } from './artist/artist.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { AddartComponent } from './addart/addart.component';
import { LoginComponent } from './login/login.component';

import { ExaboutComponent } from './exabout/exabout.component';
import { ExcontactComponent } from './excontact/excontact.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {path:'',component:EnterComponent},
  {path:'home',component:HomeComponent},
  {path:'drawing',component:DrawingComponent},
  {path:'painting',component:PaintingComponent},
  {path:'digital',component:DigitalComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'artist',component:ArtistComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addart',component:AddartComponent},
  {path:'login',component:LoginComponent},
  {path:'exabout',component:ExaboutComponent},
  {path:'excontact',component:ExcontactComponent},
  {path:'signup',component:SignupComponent},
  {path:'edit',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
