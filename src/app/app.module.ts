import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    HomeComponent,
    DrawingComponent,
    PaintingComponent,
    DigitalComponent,
    AboutComponent,
    ContactComponent,
    ArtistComponent,
    HistoryComponent,
    ProfileComponent,
    AddartComponent,
    LoginComponent,
    ExaboutComponent,
    ExcontactComponent,
    SignupComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
