import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from "./profile/profile.component";
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdComponent } from './ad/ad.component';

const routes: Routes = [
  { path: 'detail/:id', component: ProfileDetailComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'ads' , component: AdComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
