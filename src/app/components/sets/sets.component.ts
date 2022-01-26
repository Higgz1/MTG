import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss'],
})
export class SetsComponent implements OnInit {
  @Input() set: any;
  noImage:boolean = false;
  onSuccess: boolean =false;

  constructor() { }

  ngOnInit() { }

  getCards(code) {
    // console.log(code);
  }

  loadError(event){
    this.noImage = true;
    this.set.icon_svg_uri = 'https://c2.scryfall.com/file/scryfall-symbols/sets/default.svg?1643000400';
    // console.log("ERROR",this.set);
  }

  willLoad(event){
    // console.log("WILL LOAD",event);
  }

  loadSuccess(event){
    // console.log("SUCCESS");
    // this.onSuccess = true;
  }
}
