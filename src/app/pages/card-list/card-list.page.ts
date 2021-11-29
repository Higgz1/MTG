import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cards: any;
  cardUri: any;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {
    this.cardUri = JSON.parse(this.route.snapshot.paramMap.get('uri'));
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getCards();
  }

  getCards() {

    this.cardsService.getCards(this.cardUri).subscribe((cards: any) => {
      this.cards = cards.data;
      //adding index property to cards list
      for (let c of this.cards) {
        c.index = this.cards.indexOf(c);
      }
      console.log('cards', this.cards);
    });

  }
}