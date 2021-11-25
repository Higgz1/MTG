import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { CardListPage } from './card-list.page';
import { CardsService } from 'src/app/services/cards/cards.service';


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
        imports: [IonicModule.forRoot()],
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
    cardsComponent.ionViewDidEnter();
    const uri = 'https://api.scryfall.com/cards/search?order=set&q=e%3Apmid&unique=prints';
    // const card = fixture.debugElement.nativeElement.querySelector('app-sets');
    // card.click();
    expect(cardsComponent.getCards).toHaveBeenCalledTimes(1);
    expect(fakecardsService.getCards).toHaveBeenCalledWith(uri);
  });
});
