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
        },
        mana_cost: '{1}{U}',
        cmc: 2.0,
        type_line: 'Creature — Shapeshifter',
        oracle_text:
          "{1}: This card's name becomes the card name of your choice. Activate anywhere, anytime.",
        power: '1',
        toughness: '1',
        colors: ['U'],
        color_identity: ['U'],
        keywords: [],
        legalities: {
          standard: 'not_legal',
          future: 'not_legal',
          historic: 'not_legal',
          gladiator: 'not_legal',
          pioneer: 'not_legal',
          modern: 'not_legal',
          legacy: 'not_legal',
          pauper: 'not_legal',
          vintage: 'not_legal',
          penny: 'not_legal',
          commander: 'not_legal',
          brawl: 'not_legal',
          historicbrawl: 'not_legal',
          paupercommander: 'not_legal',
          duel: 'not_legal',
          oldschool: 'not_legal',
          premodern: 'not_legal',
        },
        games: ['paper'],
        reserved: false,
        foil: true,
        nonfoil: true,
        finishes: ['nonfoil', 'foil'],
        oversized: false,
        promo: false,
        reprint: false,
        variation: false,
        set_id: '4c8bc76a-05a5-43db-aaf0-34deb347b871',
        set: 'unh',
        set_name: 'Unhinged',
        set_type: 'funny',
        set_uri:
          'https://api.scryfall.com/sets/4c8bc76a-05a5-43db-aaf0-34deb347b871',
        set_search_uri:
          'https://api.scryfall.com/cards/search?order=set&q=e%3Aunh&unique=prints',
        scryfall_set_uri: 'https://scryfall.com/sets/unh?utm_source=api',
        rulings_uri:
          'https://api.scryfall.com/cards/5aa90ab6-2686-4462-8725-5d4370c05437/rulings',
        prints_search_uri:
          'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4e536142-4ebe-4062-887b-5dd123c41d39&unique=prints',
        collector_number: '23',
        digital: false,
        rarity: 'uncommon',
        flavor_text:
          "{1}: This card's flavor text becomes the flavor text of your choice. (This ability doesn't work because it's flavor text, not rules text (but neither does this reminder text, so you figure it out).)",
        card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
        artist: 'Ron Spears',
        artist_ids: ['fce9030b-86bd-4439-b06a-920a1eeb184c'],
        illustration_id: '5fc75011-f171-44a2-a793-a2800ae07f96',
        border_color: 'silver',
        frame: '2003',
        full_art: false,
        textless: false,
        booster: true,
        story_spotlight: false,
        prices: {
          usd: '0.64',
          usd_foil: '5.53',
          usd_etched: null,
          eur: '0.10',
          eur_foil: '3.50',
          tix: null,
        },
        related_uris: {
          gatherer:
            'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=74252',
          tcgplayer_infinite_articles:
            'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=_____&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
          tcgplayer_infinite_decks:
            'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=_____&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
          edhrec: 'https://edhrec.com/route/?cc=_____',
          mtgtop8:
            'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=_____',
        },
        purchase_uris: {
          tcgplayer:
            'https://shop.tcgplayer.com/product/productsearch?id=37817&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
          cardmarket:
            'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=_____&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
          cardhoarder:
            'https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=_____&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
        },
      },
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

  fit('should create normal card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'normal'
    );

    fixture.detectChanges();
    const normalCard = el.queryAll(By.css('card'));
      // img = normalCard[0].query(By.css('ion-img'));

    
    expect(normalCard).toBeTruthy('Could not find normal card');
    // expect(img.nativeElement.src).toBe(cardsListcomponent.card.image_uris.normal);

  });
});
