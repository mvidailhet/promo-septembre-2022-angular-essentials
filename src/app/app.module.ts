import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon/:index',
    component: PokemonComponent,
    children: [
      {
        path: '',
        component: GeneralComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
