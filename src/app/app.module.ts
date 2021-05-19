import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterListComponent } from './components/character-list/character-list.component';
// Material
import {MatCardModule} from '@angular/material/card';
import { CharacterService } from './service/character.service';
@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
