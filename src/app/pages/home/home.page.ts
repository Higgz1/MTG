/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private setService: SetsService,
    private cardsService: CardsService
  ) {}
  ngOnInit() {
    this.getSets();
  }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  refresh(event) {

    this.getSets();
    event.target.complete();

  }

  getSets() {
    this.setService.getSets().subscribe((setsList: any) => {
      this.sets = setsList.data;
      for (const s of this.sets) {
        // Create a custom color for every email
        s.color = this.intToRGB(this.hashCode(s.set_type));
      }
      // console.log('sets', this.sets);
    });
  }

  getCards(uri) {
    this.router.navigate(['/card-list', { uri: JSON.stringify(uri) }]);
  }

  fabDisplay(event) {
    const screenSize = event.target.clientHeight;

    const bottomPosition = screenSize + event.detail.scrollTop;
    if (bottomPosition >= 1200) {
      this.isShown = true;
    } else if (bottomPosition < 1500) {
      this.isShown = false;
    }
  }

  private hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB(i) {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
