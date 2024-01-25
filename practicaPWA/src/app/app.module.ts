import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MenuComponent } from './pages/menu/menu.component';
import { CrearComponent } from './pages/crear/crear.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { environment } from './pages/environments/environment';
import { EditarComponent } from './pages/editar/editar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule} from '@angular/common/http';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CrearComponent,
    VisualizarComponent,
    EditarComponent,
    ClientesComponent,
    FacturasComponent,
    ProductosComponent,
    DetallesComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
