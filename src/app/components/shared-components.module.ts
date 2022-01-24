import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SetsComponent } from './sets/sets.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SetsComponent,SingleCardComponent,CardsComponent,HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SetsComponent,SingleCardComponent,CardsComponent,HeaderComponent]
})
export class SharedComponentsModule { }
