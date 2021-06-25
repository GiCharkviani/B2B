import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import {LogInComponent} from './log-in/log-in.component'
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';


import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['log-in']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectLoggedInToAdd = () => redirectLoggedInTo(['add']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: BodyComponent,
  },
  {
    path: 'log-in',
    component: LogInComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'contact',
    component:ContactComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'registrate',
    component: RegisterComponent,
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
