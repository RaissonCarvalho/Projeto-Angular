import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private adsUrl = 'api/profiles/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  signup(first_name: string, last_name: string, email: string, phone_number: string, city: string ) {
    return this.http.post(
      this.adsUrl,
      { first_name, last_name, email, phone_number, city }
    )
  }
}
