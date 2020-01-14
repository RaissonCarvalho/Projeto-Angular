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

  deleteAd(id: number) {
    this.adService.deleteAd(id).subscribe(
      (success: any) => this.ads.splice(
        this.ads.findIndex(ad => ad.id === id)
      ),
      error => this.error = error
    );
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['login'])
  }
}