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

  getAd(id: number): Observable<Ad> {
    const url = `${this.adsUrl}/${id}`;
    return this.http.get<Ad>(url).pipe(
      tap(_ => this.log(`fetched ad id=${id}`)),
      catchError(this.handleError<Ad>(`getAd id=${id}`))
    );
  }

  addAd(title: string, description: string, value: number): Observable<Ad> {
    return this.http.post<Ad>(this.adsUrl, {title, description, value});
  }

  deleteAd(id: number) {
    return this.http.delete(this.adsUrl.concat(`/${id}`));
  }

  updateAd(ad: Ad): Observable<any>{
    const url = `${this.adsUrl}/${ad.id}`
    return this.http.put(url, ad, this.httpOptions).pipe(
      tap(_ => this.log(`updated ad id=${ad.id}`)),
      catchError(this.handleError<any>('updateAd'))
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
