import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.page.html',
  styleUrls: ['./card-view.page.scss'],
})
export class CardViewPage implements OnInit {
  card: any;

  constructor(
    private route: ActivatedRoute,

  ) {
    this.card = JSON.parse(this.route.snapshot.paramMap.get('card'));
    console.log('from card-view',this.card);

   }

  ngOnInit() {
  }

}
