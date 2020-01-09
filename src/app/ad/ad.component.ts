import { Component, OnInit } from '@angular/core';
import { Ad } from '../ad'
import { AdService } from '../ad.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  ads: Ad[];
  error: any[];

  constructor(private adService: AdService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.getAds();
  }

  getAds(): void {
    this.adService.getAds().subscribe(ads => this.ads = ads)
  }

  addAd(title: string, description: string, value: number): void{
    this.adService.addAd(title, description, value).subscribe(
      (ad: Ad) => this.ads.push(ad),
      error => this.error = error
    );
  }

  delete(ad: Ad): void {
    this.ads = this.ads.filter(a => a !== ad);
    this.adService.deleteAd(ad).subscribe();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['login'])
  }

}
