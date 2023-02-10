import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemon/:index',
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    component: PokemonComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full',
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: ErrorComponent,
    data: { message: "T'es perdu, poto ?" }
  },
  {
    path: 'not-authorized',
    component: ErrorComponent,
    data: { message: "T'as pas les droits, poto ?" }
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}