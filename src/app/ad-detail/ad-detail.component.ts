import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../ad';
import { AdService } from '../ad.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {

  @Input() ad: Ad;

  constructor(private route: ActivatedRoute,
    private adService: AdService, 
    private location: Location) { }

  ngOnInit() {
    this.getAd();
  }

  getAd(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adService.getAd(id)
      .subscribe(ad => this.ad = ad);
  }

  save(): void {
    this.adService.updateAd(this.ad).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
}
