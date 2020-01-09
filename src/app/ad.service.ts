import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { Ad } from './ad'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private adsUrl = 'api/ads/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(this.adsUrl)
      .pipe(
        tap(_ => this.log('fetched ads')),
        catchError(this.handleError<Ad[]>('getAds', []))
      );
  }

  addAd(title: string, description: string, value: number): Observable<Ad> {
    return this.http.post<Ad>(this.adsUrl, {title, description, value});
  }

  deleteAd (ad: Ad | number): Observable<Ad> {
    const id = typeof ad === 'number' ? ad : ad.id;
    const url = this.adsUrl.concat(`/${id}`);

    return this.http.delete<Ad>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted ad id=${id}`)),
      catchError(this.handleError<Ad>('deleteAd'))
    );
  }

  private log(message: string) {
    this.messageService.add(`AdService: ${message}`);
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
