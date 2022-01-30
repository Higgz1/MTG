/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/member-ordering */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';
import { SetsService } from 'src/app/services/sets/sets.service';
import { CardsService } from '../../services/cards/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isShown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  sets: any;

  constructor(
    private router: Router,
    private setService: SetsService,
    private cardsService: CardsService,
    public loadingController: LoadingController
  ) {}
  ngOnInit() {
    this.getSets();
  }

  // ngAfterViewInit() {

  // const test = this.virtualScroll.measureScrollOffset('top');
  // console.log(test);
  

  
     
    
    
  // }

  scrollToTop() {
    this.virtualScroll.scrollToIndex(0, "smooth");
  }

  refresh(event) {
    this.getSets();
    event.target.complete();
  }

  toggleDarkModeHandler(event) {
    
    const colorTheme = event.detail.checked;
    if (colorTheme){
      document.body.setAttribute('color-theme','dark')
    }
    else{
      document.body.setAttribute('color-theme','light')

    }

    // document.body.classList.toggle('dark');
  }

  async getSets() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Please wait...',
      // message: 'Click the backdrop to dismiss early...',
      translucent: true,
      // cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    this.setService.getSets().subscribe((setsList: any) => {
      this.sets = setsList.data.filter((set) => set.card_count !== 0);
      for (const s of this.sets) {
        // Create a custom color for every email
        s.color = this.intToRGB(this.hashCode(s.set_type));
        loading.dismiss();
      }
      console.log('sets', this.sets);
    });
  }

  getCards(uri) {
    this.router.navigate(['/card-list', { uri: JSON.stringify(uri) }]);
  }

  fabDisplay(event) {
    const screenSize = event;
    // console.log('screensize',event);

    
    if (screenSize > 20) {
      this.isShown = true;
    } else if (screenSize < 20) {
      this.isShown = false;
    }
  }

  private hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB(i) {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '#' + '00000'.substring(0, 6 - c.length) + c;
  }
}
