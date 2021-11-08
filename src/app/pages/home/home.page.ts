import { Component, OnInit } from '@angular/core';
import { SetsService } from 'src/app/services/sets/sets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sets: any[];

  

  constructor(private setService: SetsService) {}
  ngOnInit() {
    this.getSets();
  }

  getSets() {
    this.setService.getSets().subscribe((setsList) => {
      this.sets = Object.values(setsList)[0];
      console.log('sets',this.sets);
    });
  }
}
