import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule }    from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessagesComponent,
    ProfileDetailComponent,
    AdComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
