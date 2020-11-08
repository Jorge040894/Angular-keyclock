import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { LayoutModule } from './layout/layout.module';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './components/cursos/cursos.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosFormComponent,
    CursosComponent,
    HomeComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8090/microservicio-gateway'],
          sendAccessToken: true
      }
  }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
