import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModelDrivenComponent } from './pages/login-model-driven/login-model-driven.component';
import { LoginTemplateDrivenComponent } from './pages/login-template-driven/login-template-driven.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: LoginModelDrivenComponent
    //component: HomeComponent,
  },
  {
    path: 'login-template-driven-form',
    canDeactivate: [CanDeactivateGuard],
    component: LoginTemplateDrivenComponent
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
