import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() { }

  flipTransform(item) {
    console.log(item)
    
    const transform = document.body.querySelectorAll('.card')[item.index];
    console.log(transform)

    transform.classList.toggle('is-flipped');
  }

  flipToken(item) {

    const token = document.body.querySelectorAll('.card')[item.index];
    console.log(token)

    token.classList.toggle('is-flipped');
  }

  flipCard(item) {
    const card = document.body.querySelectorAll('.card')[item.index];
    card.classList.toggle('is-xflipped');
  }

  modal_dfc(item) {
    const flip_card = document.body.querySelectorAll('.card')[item.index];
    flip_card.classList.toggle('is-flipped');
  }

  art_series(item) {
    // console.log(item)
    const art_series = document.body.querySelectorAll('.card')[item.index];
    console.log(art_series)

    art_series.classList.toggle('is-flipped'); 

  }
}
