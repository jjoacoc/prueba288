import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Añadir HttpClientModule aquí
    ReactiveFormsModule // Añadir ReactiveFormsModule aquí

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
