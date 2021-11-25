import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { SetsService } from 'src/app/services/sets/sets.service';
import { CardsService } from '../../services/cards/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isShown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  sets: any;

  constructor(
    private setService: SetsService,
    private cardsService: CardsService
  ) {}
  ngOnInit() {
    this.getSets();
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  getSets() {
    this.setService.getSets().subscribe((setsList: any) => {
      this.sets = setsList.data;
      for (let s of this.sets) {
        // Create a custom color for every email
        s.color = this.intToRGB(this.hashCode(s.set_type));
      }
      console.log('sets', this.sets);
    });
  }

  getCards(uri) {
    this.cardsService.getCards(uri).subscribe((cards) => {
      const the_cards = cards;
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

  private hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
