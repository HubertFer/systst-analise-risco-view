import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componnets/template/header/header.component';
import { FormRiskComponent } from './form-risk/form-risk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Update } from './main/update.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormRiskComponent,
    Update,
    NaviBarComponent
  ],
  entryComponents: [
    Update
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  exports: [
    Update
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
