import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createProfileUrl = 'api/profiles/';

  constructor(private http: HttpClient) { }

  signup(first_name: string, last_name: string, email: string, phone_number: string, city: string){
    return this.http.post(this.createProfileUrl, {first_name, last_name, email, phone_number, city})
  }
}



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptor implements HttpInterceptor{
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
//     const token = localStorage.getItem('token');

//     if (token){
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', 'JWT'.concat(token))
//       });
//       return next.handle(cloned);
//     }else{
//       return next.handle(req);
//     }
//   }
// }



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate{
//   constructor(private authService: AuthService, private router: Router){}

//   canActivate(){
//     if (this.authService.isLoggedIn()){
//       this.authService.refreshToken();
      
//       return true;
//     }else{
//       this.authService.logout();
//       this.router.navigate(['login'])
      
//       return false
//     }
//   }
// }