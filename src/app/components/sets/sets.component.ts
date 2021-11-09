import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss'],
})
export class SetsComponent implements OnInit {
  @Input() set: any;

  constructor() { }

  ngOnInit() { }

  getCards(code) {
    // console.log(code);
  }
}
