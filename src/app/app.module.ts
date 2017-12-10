import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, Headers, Response } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { StudRegisterComponent } from './components/stud-register/stud-register.component';
import { CustomService } from './services/custom.service';
import { AuthService } from './services/auth.service';
import { StudViewComponent } from './components/stud-view/stud-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    StudRegisterComponent,
    StudViewComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'stud_register', component:  StudRegisterComponent},
      { path: 'stud_view', component:  StudViewComponent}
    ])
  ],
  providers: [CustomService],
  bootstrap: [AppComponent]
})

export class AppModule { }
