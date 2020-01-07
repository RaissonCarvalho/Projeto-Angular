import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup(first_name: string, last_name: string, email: string, phone_number: string, city: string){
    this.authService.signup(first_name, last_name, email, phone_number, city).subscribe(
      sucess => this.router.navigate(['ads']),
      error => this.error = error
    )
  }

}
