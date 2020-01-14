import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  error: any;

  constructor(private adService: AdService, private router: Router) { }

  ngOnInit() {
  }

  addAd(title: string, description: string, value: number): void{
    this.adService.addAd(title, description, value).subscribe(
      sucess => this.router.navigate(['ads']),
      error => this.error = error
    );
  }

}
