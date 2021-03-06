import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AuthService, AuthInterceptor, AuthGuard } from './auth.service';


import { MessagesComponent } from './messages/messages.component';
import { AdComponent } from './ad/ad.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdService } from './ad.service';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { CreateAdComponent } from './create-ad/create-ad.component';

@NgModule({
  declarations: [
    AppComponent,

    MessagesComponent,
    AdComponent,
    SignupComponent,
    LoginComponent,
    AdDetailComponent,
    CreateAdComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AdService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
