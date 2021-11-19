import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { SetsService } from 'src/app/services/sets/sets.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sets: any[];
  public isShown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;



  constructor(private setService: SetsService) { }
  ngOnInit() {
    this.getSets();
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  getSets() {
    this.setService.getSets().subscribe((setsList) => {
      this.sets = Object.values(setsList)[0];
      // for (let s of this.sets) {
      //   // Create a custom color for every email
      //   s.color = this.intToRGB(this.hashCode(s.type));
      // }

    });

  }

  fabDisplay(event) {
    const screenSize = event.target.clientHeight;

    let bottomPosition = screenSize + event.detail.scrollTop;
    if (bottomPosition >= 1200) {
      this.isShown = true;
    } else if (bottomPosition < 1500) {
      this.isShown = false;
    }
  }


  // private hashCode(str) {
  //   var hash = 0;
  //   for (var i = 0; i < str.length; i++) {
  //     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  //   }
  //   return hash;
  // }

  // private intToRGB(i) {
  //   var c = (i & 0x00FFFFFF)
  //     .toString(16)
  //     .toUpperCase();

  //   return '#' + '00000'.substring(0, 6 - c.length) + c;
  // }

}
