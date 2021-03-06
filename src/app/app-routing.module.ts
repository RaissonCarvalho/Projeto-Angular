import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdComponent } from './ad/ad.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'ads' , component: AdComponent, canActivate: [AuthGuard]},
  {path: 'ad-detail/:id', component: AdDetailComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-ad', component: CreateAdComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
