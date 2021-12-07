import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CardsComponent } from './cards.component';
import { DebugElement } from '@angular/core';

describe('CardsComponent', () => {
  let cardsListcomponent: CardsComponent,
    fixture: ComponentFixture<CardsComponent>,
    el: DebugElement;

  const mockResponse = {
    data: [
      {
        object: 'card',
        id: '5aa90ab6-2686-4462-8725-5d4370c05437',
        oracle_id: '4e536142-4ebe-4062-887b-5dd123c41d39',
        multiverse_ids: [74252],
        tcgplayer_id: 37817,
        cardmarket_id: 14786,
        name: '_____',
        lang: 'en',
        released_at: '2004-11-19',
        uri: 'https://api.scryfall.com/cards/5aa90ab6-2686-4462-8725-5d4370c05437',
        scryfall_uri: 'https://scryfall.com/card/unh/23/_____?utm_source=api',
        layout: 'normal',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1630393486',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1630393486',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1630393486',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.png?1630393486',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1630393486',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/a/5aa90ab6-2686-4462-8725-5d4370c05437.jpg?1630393486',
        }
      },
      {
        "object": "card",
        "id": "ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a",
        "oracle_id": "a0593a5b-6f76-4eb3-a1b1-9794d2d36c92",
        "multiverse_ids": [
          368989
        ],
        "mtgo_id": 48516,
        "tcgplayer_id": 67902,
        "cardmarket_id": 261331,
        "name": "Armed // Dangerous",
        "lang": "en",
        "released_at": "2013-05-03",
        "uri": "https://api.scryfall.com/cards/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a",
        "scryfall_uri": "https://scryfall.com/card/dgm/122/armed-dangerous?utm_source=api",
        "layout": "split",
        "highres_image": true,
        "image_status": "highres_scan",
        "image_uris": {
          "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172",
          "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172",
          "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172",
          "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.png?1562943172",
          "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172",
          "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172"
        }
      },
      {
        "object": "card",
        "id": "58164521-aeec-43fc-9db9-d595432dea6f",
        "oracle_id": "cb952c81-c7bb-4670-938d-296d35551986",
        "multiverse_ids": [
          451089
        ],
        "tcgplayer_id": 170948,
        "cardmarket_id": 361719,
        "name": "Budoka Gardener // Dokai, Weaver of Life",
        "lang": "en",
        "released_at": "2018-08-09",
        "uri": "https://api.scryfall.com/cards/58164521-aeec-43fc-9db9-d595432dea6f",
        "scryfall_uri": "https://scryfall.com/card/c18/134/budoka-gardener-dokai-weaver-of-life?utm_source=api",
        "layout": "flip",
        "highres_image": true,
        "image_status": "highres_scan",
        "image_uris": {
          "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828",
          "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828",
          "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828",
          "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.png?1592710828",
          "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828",
          "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828"
        }
      }
    ],
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardsComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(CardsComponent);
      cardsListcomponent = fixture.componentInstance;
      el = fixture.debugElement;
    })
  );

  it('should create', () => {
    expect(cardsListcomponent).toBeTruthy();
  });

  //Normal card
  it('should create normal card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'normal'
    )[0];

    fixture.detectChanges();

    const normalCard = el.queryAll(By.css('ion-card')),
      img = normalCard[0].query(By.css('ion-img'));


    expect(normalCard).toBeTruthy("Could not find card");
    expect(img.nativeElement.src).toBe(cardsListcomponent.card.image_uris.normal);

  });

  //Split card
  it('should create split card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'split'
    )[0];

    fixture.detectChanges();

    const splitCard = el.queryAll(By.css('ion-card')),
      img = splitCard[0].query(By.css('ion-img'));


    expect(splitCard).toBeTruthy("Could not find card");
    expect(img.nativeElement.src).toBe(cardsListcomponent.card.image_uris.normal);

  });


  //Flip card and FAB
  it('should create Flip card and FAB button', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'flip'
    )[0];

    fixture.detectChanges();

    const flipCard = el.queryAll(By.css('ion-card')),
      fab = el.queryAll(By.css('ion-fab')),
      img = flipCard[0].query(By.css('ion-img'));


    expect(flipCard).toBeTruthy("Could not find card");
    expect(fab).toBeTruthy("Could not find fab");
    expect(img.nativeElement.src).toBe(cardsListcomponent.card.image_uris.normal);

  });

  //Transform card and FAB


});
