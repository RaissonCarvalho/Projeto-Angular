import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages/messages.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AdComponent } from './ad/ad.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessagesComponent,
    ProfileDetailComponent,
    AdComponent,
    SignupComponent,

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
