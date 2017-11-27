import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { StudRegisterComponent } from './components/stud-register/stud-register.component';
import { CustomService } from './services/custom.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    StudRegisterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'stud_register', component:  StudRegisterComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
