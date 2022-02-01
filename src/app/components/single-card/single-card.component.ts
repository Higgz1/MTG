import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() {}

  cardTransform(card) {
    const card_transform = document.body.querySelectorAll('.card')[0];
    card_transform.classList.toggle('is-flipped');
  }

  flipCard(index) {
    const card = document.body.querySelectorAll('.card')[0];
    card.classList.toggle('is-xflipped');
  }

}
 