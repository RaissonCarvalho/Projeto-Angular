import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from "./profile/profile.component";
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdComponent } from './ad/ad.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'detail/:id', component: ProfileDetailComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'ads' , component: AdComponent},
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
