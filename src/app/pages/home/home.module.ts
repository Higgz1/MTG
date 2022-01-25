import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SharedComponentsModule,
    HomePageRoutingModule,
    ScrollingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
