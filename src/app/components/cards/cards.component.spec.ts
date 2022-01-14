/* eslint-disable @typescript-eslint/naming-convention */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CardsComponent } from './cards.component';
import { DebugElement } from '@angular/core';
import { MockData } from '../../../assets/mockData';

describe('CardsComponent', () => {
  let cardsListcomponent: CardsComponent;
    let fixture: ComponentFixture<CardsComponent>;
    let el: DebugElement;

beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardsComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents().then(() => {
        fixture = TestBed.createComponent(CardsComponent);
        cardsListcomponent = fixture.componentInstance;
        el = fixture.debugElement;
      });

    })
  );

  it('should create component', () => {
    expect(cardsListcomponent).toBeTruthy();
  });

  //Normal card
  it('should create normal card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'normal'
    )[0];

    fixture.detectChanges();

    const normalCard = el.queryAll(By.css('ion-card'));
      const img = normalCard[0].query(By.css('ion-img'));

    expect(normalCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //Split card
  it('should create split card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'split'
    )[0];

    fixture.detectChanges();

    const splitCard = el.queryAll(By.css('ion-card'));
      const img = splitCard[0].query(By.css('ion-img'));

    expect(splitCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //Flip card and FAB
  it('should create Flip card and FAB button', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'flip'
    )[0];

    fixture.detectChanges();

    const flipCard = el.queryAll(By.css('ion-card'));
      const fab = el.queryAll(By.css('ion-fab'));
      const img = flipCard[0].query(By.css('ion-img'));

    expect(flipCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //Transform card and FAB
  it('should create Transform card and FAB button', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'transform'
    )[0];

    fixture.detectChanges();

    const transformCard = el.queryAll(By.css('.card'));
      const fab = el.queryAll(By.css('ion-fab'));
      const transformFront = transformCard[0].query(By.css('ion-img.first'));
      const transformBack = transformCard[0].query(By.css('ion-img.back'));

    expect(transformCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(transformFront.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.small
    );
    expect(transformBack.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.small
    );
  });

  //Modal_dfc
  it('should create Modal_dfc card and FAB button', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'modal_dfc'
    )[0];

    fixture.detectChanges();

    const modalCard = el.queryAll(By.css('.card'));
      const fab = el.queryAll(By.css('ion-fab'));
      const modalFront = modalCard[0].query(By.css('ion-img.first'));
      const modalBack = modalCard[0].query(By.css('ion-img.back'));

    expect(modalCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(modalFront.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.small
    );
    expect(modalBack.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.small
    );
  });

  //Leveler card
  it('should create leveler card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'leveler'
    )[0];

    fixture.detectChanges();

    const levelerCard = el.queryAll(By.css('ion-card'));
      const img = levelerCard[0].query(By.css('ion-img'));

    expect(levelerCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //Class card
  it('should create class card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'class'
    )[0];

    fixture.detectChanges();

    const classCard = el.queryAll(By.css('ion-card'));
      const img = classCard[0].query(By.css('ion-img'));

    expect(classCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //saga card
  it('should create saga card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'saga'
    )[0];

    fixture.detectChanges();

    const sagaCard = el.queryAll(By.css('ion-card'));
      const img = sagaCard[0].query(By.css('ion-img'));

    expect(sagaCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //adventure card
  it('should create adventure card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'adventure'
    )[0];

    fixture.detectChanges();

    const adventureCard = el.queryAll(By.css('ion-card'));
      const img = adventureCard[0].query(By.css('ion-img'));

    expect(adventureCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  // scheme card
  it('should create scheme card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'scheme'
    )[0];

    fixture.detectChanges();

    const schemeCard = el.queryAll(By.css('ion-card'));
      const img = schemeCard[0].query(By.css('ion-img'));

    expect(schemeCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  // vanguard card
  it('should create vanguard card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'vanguard'
    )[0];

    fixture.detectChanges();

    const vanguardCard = el.queryAll(By.css('ion-card'));
      const img = vanguardCard[0].query(By.css('ion-img'));

    expect(vanguardCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  // token card
  it('should create token card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'token'
    )[0];

    fixture.detectChanges();

    const tokenCard = el.queryAll(By.css('ion-card'));
      const img = tokenCard[0].query(By.css('ion-img'));

    expect(tokenCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //double_faced_token
  it('should create double faced token card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'double_faced_token'
    )[0];

    fixture.detectChanges();

    const faceCard = el.queryAll(By.css('.card'));
      const fab = el.queryAll(By.css('ion-fab'));
      const transformFront = faceCard[0].query(By.css('ion-img.first'));
      const transformBack = faceCard[0].query(By.css('ion-img.back'));

    expect(faceCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(transformFront.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.small
    );
    expect(transformBack.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.small
    );
  });

  //emblem
  it('should create emblem card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'emblem'
    )[0];

    fixture.detectChanges();

    const emblemCard = el.queryAll(By.css('ion-card'));
      const img = emblemCard[0].query(By.css('ion-img'));

    expect(emblemCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //augment
  it('should create augment card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'augment'
    )[0];

    fixture.detectChanges();

    const augmentCard = el.queryAll(By.css('ion-card'));
      const img = augmentCard[0].query(By.css('ion-img'));

    expect(augmentCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //host
  it('should create host card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'host'
    )[0];

    fixture.detectChanges();

    const hostCard = el.queryAll(By.css('ion-card'));
      const img = hostCard[0].query(By.css('ion-img'));

    expect(hostCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.small
    );
  });

  //art_series
  it('should create art_series card', () => {
    cardsListcomponent.card = MockData.data.filter(
      (card) => card.layout === 'art_series'
    )[0];

    fixture.detectChanges();

    const artCard = el.queryAll(By.css('.card'));
      const fab = el.queryAll(By.css('ion-fab'));
      const transformFront = artCard[0].query(By.css('ion-img.first'));
      const transformBack = artCard[0].query(By.css('ion-img.back'));

    expect(artCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(transformFront.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.small
    );
    expect(transformBack.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.small
    );
  });

  //Meld card

  // Planar card

  //reversible_card
});
