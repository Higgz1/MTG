import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cards: Object;
  cardUri: any;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {
    // this.cardUri = JSON.parse(this.route.snapshot.paramMap.get('uri'));
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.getCards();
  }

  getCards() {
    // console.log('cards',this.cardUri);

    this.cardsService.getCards(this.cardUri).subscribe((cards) => {
      this.cards = cards;
    console.log('cards',this.cards);

    });
    // console.log('cards',this.cards);
  }
}
