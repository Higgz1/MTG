import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() card: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  cardTransform(index) {
    const card = document.body.querySelectorAll('.card')[index];
    // console.log(transform)
    card.classList.toggle('is-flipped');
  }

  flipCard(index) {
    const card = document.body.querySelectorAll('.card')[index];
    card.classList.toggle('is-xflipped');
  }

  card_view(card){
    console.log(card);
    // this.router.navigate(['/card-view', { uri: JSON.stringify(card) }]);
  }
}
