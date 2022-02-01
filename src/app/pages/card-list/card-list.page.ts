import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cards: any;
  cardUri: any;
  set_name: string;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    public loadingController: LoadingController

  ) {
    this.cardUri = JSON.parse(this.route.snapshot.paramMap.get('uri'));
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getCards();
  }

  async getCards() {

    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Please wait...',
      // message: 'Click the backdrop to dismiss early...',
      translucent: true,
      // cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    this.cardsService.getCards(this.cardUri).subscribe((resp: any) => {
      // console.log('cards', resp);

      this.cards = resp.data;
      //adding index property to cards list
      for (const c of this.cards) {
        c.index = this.cards.indexOf(c);
        loading.dismiss();

      }
      this.set_name =  this.cards[0].set_name
      console.log('cards', this.cards);
    });

  }
}
