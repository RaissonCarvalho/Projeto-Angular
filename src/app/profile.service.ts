import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Profile } from './profile';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profilesUrl = 'api/profiles/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  signup(first_name: string, last_name: string, email: string, phone_number: string, city: string){
    return this.http.post(this.profilesUrl, {first_name, last_name, email, phone_number, city});
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        tap(_ => this.log('fetched profiles')),
        catchError(this.handleError<Profile[]>('getProfiles', []))
      );
  }

  getProfile(id: number): Observable<Profile> {
    const url = `${this.profilesUrl}/${id}`;
    return this.http.get<Profile>(url).pipe(
      tap(_ => this.log(`fetched profile id=${id}`)),
      catchError(this.handleError<Profile>(`getHero id=${id}`))
    );
  }

  updateProfile(profile: Profile): Observable<Profile>{
    return this.http.put(`${this.profilesUrl}/${profile.id}`, profile, this.httpOptions).pipe(
      tap(_ => this.log(`updated profile id=${profile.id}`)),
      catchError(this.handleError<any>('updateProfile'))
    );
  }

  private log(message: string) {
    this.messageService.add(`ProfileService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
