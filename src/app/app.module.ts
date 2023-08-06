import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PagesModule } from './pages/pages.module';
import { ComponentesModule } from './componentes/componentes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentesModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    RouterModule

  ]
})
export class AppModule { }
