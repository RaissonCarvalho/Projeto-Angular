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

  private profilesUrl = 'api/profiles/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getProfiles (): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profilesUrl)
      .pipe(
        tap(_ => this.log('fetched profiles')),
        catchError(this.handleError<Profile[]>('getProfiles', []))
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
