import { Component, OnInit } from '@angular/core';
import { SetsService } from 'src/app/services/sets/sets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sets: any[];

  

  constructor(private setService: SetsService) {}
  ngOnInit() {
    this.getSets();
  }

  getSets() {
    this.setService.getSets().subscribe((setsList) => {
      this.sets = Object.values(setsList)[0];
      for (let s of this.sets) {
        // Create a custom color for every email
        s.color = this.intToRGB(this.hashCode(s.type));
      }
      
    });
    
  }

  private hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB(i) {
    var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
