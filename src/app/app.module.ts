import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaxisComponent } from './taxis/taxis.component';
import { FormsModule } from '@angular/forms';
import { PaseadorComponent } from './paseador/paseador.component';

@NgModule({
  declarations: [		
    AppComponent,
    TaxisComponent,
    PaseadorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
