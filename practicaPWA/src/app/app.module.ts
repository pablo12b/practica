import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuComponent } from './pages/menu/menu.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { CrearComponent } from './pages/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VisualizarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"practicapwa-63f87","appId":"1:1004037856530:web:9b4dc2167d2912fef467cb","storageBucket":"practicapwa-63f87.appspot.com","apiKey":"AIzaSyDI8mwwf6VvQlj_It2j8F0ZzYoooC53FvE","authDomain":"practicapwa-63f87.firebaseapp.com","messagingSenderId":"1004037856530","measurementId":"G-HWT214MLYM"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
