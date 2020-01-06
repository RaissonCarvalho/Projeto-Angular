import { Component, OnInit } from '@angular/core';
import { Ad } from '../ad'
import { AdService } from '../ad.service'

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  ads: Ad[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.getAds();
  }

  getAds(): void {
    this.adService.getAds().subscribe(ads => this.ads = ads)
  }

}
