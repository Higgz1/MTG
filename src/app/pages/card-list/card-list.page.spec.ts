import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CardListPage } from './card-list.page';
import { CardsService } from 'src/app/services/cards/cards.service';
import { CardsComponent } from '../../components/cards/cards.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

describe('CardListPage', () => {
  let cardsComponent: CardListPage;
  let fixture: ComponentFixture<CardListPage>;
  let fakecardsService: CardsService;

  beforeEach(
    waitForAsync(() => {
      fakecardsService = jasmine.createSpyObj<CardsService>('CardsService', {
        getCards: of(),
      });

      TestBed.configureTestingModule({
        declarations: [CardListPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterTestingModule,
          Ng2SearchPipeModule
        ],
        providers: [{ provide: CardsService, useValue: fakecardsService }],
      }).compileComponents();

      fixture = TestBed.createComponent(CardListPage);
      cardsComponent = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(cardsComponent).toBeTruthy();
  });

  it('on page enter make a fetch request to get cards', () => {
    // fixture.detectChanges();
    spyOn(cardsComponent, 'getCards').and.callThrough();
    const uri = 'https://api.scryfall.com/cards/search?order=set&q=e%3Apmid&unique=prints';
    cardsComponent.ionViewDidEnter();
    expect(cardsComponent.getCards).toHaveBeenCalledTimes(1);
    expect(fakecardsService.getCards).toHaveBeenCalledTimes(1);
  });

  // it('When getCards() is called it should get the response from the service ', () => {
  //   const cardsMock = {
  //     object: 'list',
  //     total_cards: 565,
  //     has_more: true,
  //     next_page:
  //       'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=cmc&page=2&q=c%3Ared+pow%3D3&unique=cards'
  //   };
  //   // spyOn(fakecardsService, 'getCards').and.returnValue(of(cardsMock));
  //   cardsComponent.getCards();
  //   expect(cardsComponent.cards).toEqual(cardsMock);

  // });
});
