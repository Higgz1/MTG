import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardViewPageRoutingModule } from './card-view-routing.module';

import { CardViewPage } from './card-view.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    CardViewPageRoutingModule
  ],
  declarations: [CardViewPage]
})
export class CardViewPageModule {}
