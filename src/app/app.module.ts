import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './pages/error/error.component';
import { LoginTemplateDrivenComponent } from './pages/login-template-driven/login-template-driven.component';
import { LoginModelDrivenComponent } from './pages/login-model-driven/login-model-driven.component';
import { HttpClientModule } from '@angular/common/http';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SearchPokemonPipe } from './pipes/search-pokemon.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    DetailsComponent,
    PageNotFoundComponent,
    ErrorComponent,
    LoginTemplateDrivenComponent,
    LoginModelDrivenComponent,
    ShortenPipe,
    SearchPokemonPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
