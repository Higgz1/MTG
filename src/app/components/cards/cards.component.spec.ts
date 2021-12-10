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
      },
      {
        object: 'card',
        id: 'ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a',
        oracle_id: 'a0593a5b-6f76-4eb3-a1b1-9794d2d36c92',
        multiverse_ids: [368989],
        mtgo_id: 48516,
        tcgplayer_id: 67902,
        cardmarket_id: 261331,
        name: 'Armed // Dangerous',
        lang: 'en',
        released_at: '2013-05-03',
        uri: 'https://api.scryfall.com/cards/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a',
        scryfall_uri:
          'https://scryfall.com/card/dgm/122/armed-dangerous?utm_source=api',
        layout: 'split',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.png?1562943172',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/f/ff7f4fc2-6f76-44e7-a30b-7166a0d10d2a.jpg?1562943172',
        },
      },
      {
        object: 'card',
        id: '58164521-aeec-43fc-9db9-d595432dea6f',
        oracle_id: 'cb952c81-c7bb-4670-938d-296d35551986',
        multiverse_ids: [451089],
        tcgplayer_id: 170948,
        cardmarket_id: 361719,
        name: 'Budoka Gardener // Dokai, Weaver of Life',
        lang: 'en',
        released_at: '2018-08-09',
        uri: 'https://api.scryfall.com/cards/58164521-aeec-43fc-9db9-d595432dea6f',
        scryfall_uri:
          'https://scryfall.com/card/c18/134/budoka-gardener-dokai-weaver-of-life?utm_source=api',
        layout: 'flip',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.png?1592710828',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/8/58164521-aeec-43fc-9db9-d595432dea6f.jpg?1592710828',
        },
      },
      {
        object: 'card',
        id: '8093f8b0-5d50-48ca-b616-e92535a47138',
        oracle_id: '80b07882-e144-4815-8b6f-04b3ab343d97',
        multiverse_ids: [409843, 409844],
        mtgo_id: 60370,
        mtgo_foil_id: 60371,
        tcgplayer_id: 116486,
        cardmarket_id: 289120,
        name: 'Accursed Witch // Infectious Curse',
        lang: 'en',
        released_at: '2016-04-08',
        uri: 'https://api.scryfall.com/cards/8093f8b0-5d50-48ca-b616-e92535a47138',
        scryfall_uri:
          'https://scryfall.com/card/soi/97/accursed-witch-infectious-curse?utm_source=api',
        layout: 'transform',
        highres_image: true,
        image_status: 'highres_scan',
        cmc: 4.0,
        type_line: 'Creature — Human Shaman // Enchantment — Aura Curse',
        color_identity: ['B'],
        keywords: ['Enchant'],
        card_faces: [
          {
            object: 'card_face',
            name: 'Accursed Witch',
            flavor_name: '',
            mana_cost: '{3}{B}',
            type_line: 'Creature — Human Shaman',
            oracle_text:
              'Spells your opponents cast that target Accursed Witch cost {1} less to cast.\nWhen Accursed Witch dies, return it to the battlefield transformed under your control attached to target opponent.',
            colors: ['B'],
            power: '4',
            toughness: '2',
            artist: 'Wesley Burt',
            artist_id: 'b98c9d94-8bdb-49af-871d-7bac92274535',
            illustration_id: 'e648ea98-8935-4b00-b3d9-d4d1e98026d8',
            image_uris: {
              small:
                'https://c1.scryfall.com/file/scryfall-cards/small/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              normal:
                'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              large:
                'https://c1.scryfall.com/file/scryfall-cards/large/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.png?1576384328',
              art_crop:
                'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              border_crop:
                'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
            },
          },
          {
            object: 'card_face',
            name: 'Infectious Curse',
            flavor_name: '',
            mana_cost: '',
            type_line: 'Enchantment — Aura Curse',
            oracle_text:
              "Enchant player\nSpells you cast that target enchanted player cost {1} less to cast.\nAt the beginning of enchanted player's upkeep, that player loses 1 life and you gain 1 life.",
            colors: ['B'],
            color_indicator: ['B'],
            artist: 'Wesley Burt',
            artist_id: 'b98c9d94-8bdb-49af-871d-7bac92274535',
            illustration_id: '828863bf-ddb7-4719-bcfd-2a20c667829f',
            image_uris: {
              small:
                'https://c1.scryfall.com/file/scryfall-cards/small/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              normal:
                'https://c1.scryfall.com/file/scryfall-cards/normal/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              large:
                'https://c1.scryfall.com/file/scryfall-cards/large/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              png: 'https://c1.scryfall.com/file/scryfall-cards/png/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.png?1576384328',
              art_crop:
                'https://c1.scryfall.com/file/scryfall-cards/art_crop/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
              border_crop:
                'https://c1.scryfall.com/file/scryfall-cards/border_crop/back/8/0/8093f8b0-5d50-48ca-b616-e92535a47138.jpg?1576384328',
            },
          },
        ],
      },
      {
        object: 'card',
        id: '5d131784-c1a3-463e-a37b-b720af67ab62',
        oracle_id: '0a69c3dd-52a3-4ef6-b53f-b0780e0dc5f8',
        multiverse_ids: [503646, 503647],
        mtgo_id: 87403,
        arena_id: 75077,
        tcgplayer_id: 230095,
        cardmarket_id: 529372,
        name: 'Alrund, God of the Cosmos // Hakka, Whispering Raven',
        lang: 'en',
        released_at: '2021-02-05',
        uri: 'https://api.scryfall.com/cards/5d131784-c1a3-463e-a37b-b720af67ab62',
        scryfall_uri:
          'https://scryfall.com/card/khm/40/alrund-god-of-the-cosmos-hakka-whispering-raven?utm_source=api',
        layout: 'modal_dfc',
        highres_image: true,
        image_status: 'highres_scan',
        cmc: 5.0,
        type_line: 'Legendary Creature — God // Legendary Creature — Bird',
        color_identity: ['U'],
        keywords: ['Scry', 'Flying'],
        card_faces: [
          {
            object: 'card_face',
            name: 'Alrund, God of the Cosmos',
            flavor_name: '',
            mana_cost: '{3}{U}{U}',
            type_line: 'Legendary Creature — God',
            oracle_text:
              'Alrund gets +1/+1 for each card in your hand and each foretold card you own in exile.\nAt the beginning of your end step, choose a card type, then reveal the top two cards of your library. Put all cards of the chosen type revealed this way into your hand and the rest on the bottom of your library in any order.',
            colors: ['U'],
            power: '1',
            toughness: '1',
            artist: 'Kieran Yanner',
            artist_id: 'aa7e89ed-d294-4633-9057-ce04dacfcfa4',
            illustration_id: '7f3f962c-c543-4879-aa67-8ba75aa182a8',
            image_uris: {
              small:
                'https://c1.scryfall.com/file/scryfall-cards/small/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              normal:
                'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              large:
                'https://c1.scryfall.com/file/scryfall-cards/large/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.png?1631046568',
              art_crop:
                'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              border_crop:
                'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
            },
          },
          {
            object: 'card_face',
            name: 'Hakka, Whispering Raven',
            flavor_name: '',
            mana_cost: '{1}{U}',
            type_line: 'Legendary Creature — Bird',
            oracle_text:
              "Flying\nWhenever Hakka, Whispering Raven deals combat damage to a player, return it to its owner's hand, then scry 2.",
            colors: ['U'],
            power: '2',
            toughness: '3',
            flavor_text:
              "Alrund's raven soars between realms; no secret is beyond his grasp.",
            artist: 'Kieran Yanner',
            artist_id: 'aa7e89ed-d294-4633-9057-ce04dacfcfa4',
            illustration_id: '580be266-5f4c-4c30-adbd-58993cf8149f',
            image_uris: {
              small:
                'https://c1.scryfall.com/file/scryfall-cards/small/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              normal:
                'https://c1.scryfall.com/file/scryfall-cards/normal/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              large:
                'https://c1.scryfall.com/file/scryfall-cards/large/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              png: 'https://c1.scryfall.com/file/scryfall-cards/png/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.png?1631046568',
              art_crop:
                'https://c1.scryfall.com/file/scryfall-cards/art_crop/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
              border_crop:
                'https://c1.scryfall.com/file/scryfall-cards/border_crop/back/5/d/5d131784-c1a3-463e-a37b-b720af67ab62.jpg?1631046568',
            },
          },
        ],
      },
      {
        object: 'card',
        id: '817602f9-0844-4ba2-bd7c-380fcd0c15ff',
        oracle_id: '9a9c221d-9bb4-4ec4-b5db-cb26db6065df',
        multiverse_ids: [401645],
        tcgplayer_id: 104206,
        cardmarket_id: 284132,
        name: 'Caravan Escort',
        lang: 'en',
        released_at: '2015-08-28',
        uri: 'https://api.scryfall.com/cards/817602f9-0844-4ba2-bd7c-380fcd0c15ff',
        scryfall_uri:
          'https://scryfall.com/card/ddp/3/caravan-escort?utm_source=api',
        layout: 'leveler',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.jpg?1593095358',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.jpg?1593095358',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.jpg?1593095358',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.png?1593095358',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.jpg?1593095358',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/1/817602f9-0844-4ba2-bd7c-380fcd0c15ff.jpg?1593095358',
        },
      },
      {
        object: 'card',
        id: 'f754b385-a28d-48de-a91f-2b4f33cc47f7',
        oracle_id: '19ba0f2d-4de3-49a0-be7d-da0aa220cd8a',
        multiverse_ids: [527520],
        mtgo_id: 91968,
        arena_id: 77338,
        tcgplayer_id: 243342,
        cardmarket_id: 571525,
        name: 'Sorcerer Class',
        lang: 'en',
        released_at: '2021-07-23',
        uri: 'https://api.scryfall.com/cards/f754b385-a28d-48de-a91f-2b4f33cc47f7',
        scryfall_uri:
          'https://scryfall.com/card/afr/233/sorcerer-class?utm_source=api',
        layout: 'class',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.jpg?1627709409',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.jpg?1627709409',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.jpg?1627709409',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.png?1627709409',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.jpg?1627709409',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/7/f754b385-a28d-48de-a91f-2b4f33cc47f7.jpg?1627709409',
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

  it('should create component', () => {
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

    expect(normalCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  //Split card
  it('should create split card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'split'
    )[0];

    fixture.detectChanges();

    const splitCard = el.queryAll(By.css('ion-card')),
      img = splitCard[0].query(By.css('ion-img'));

    expect(splitCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
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

    expect(flipCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  //Transform card and FAB
  it('should create Transform card and FAB button', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'transform'
    )[0];

    fixture.detectChanges();

    const transformCard = el.queryAll(By.css('.card')),
      fab = el.queryAll(By.css('ion-fab')),
      transform_front = transformCard[0].query(By.css('ion-img.first')),
      transform_back = transformCard[0].query(By.css('ion-img.back'));

    expect(transformCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(transform_front.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.normal
    );
    expect(transform_back.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.normal
    );
  });

  //Modal_dfc
  it('should create Modal_dfc card and FAB button', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'modal_dfc'
    )[0];

    fixture.detectChanges();

    const modalCard = el.queryAll(By.css('.card')),
      fab = el.queryAll(By.css('ion-fab')),
      modal_front = modalCard[0].query(By.css('ion-img.first')),
      modal_back = modalCard[0].query(By.css('ion-img.back'));

    expect(modalCard).toBeTruthy('Could not find card');
    expect(fab).toBeTruthy('Could not find FAB');
    expect(modal_front.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[0].image_uris.normal
    );
    expect(modal_back.nativeElement.src).toBe(
      cardsListcomponent.card.card_faces[1].image_uris.normal
    );
  });

  //Leveler card
  it('should create leveler card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'leveler'
    )[0];

    fixture.detectChanges();

    const levelerCard = el.queryAll(By.css('ion-card')),
      img = levelerCard[0].query(By.css('ion-img'));

    expect(levelerCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  //Class card
  it('should create class card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'class'
    )[0];

    fixture.detectChanges();

    const classCard = el.queryAll(By.css('ion-card')),
      img = classCard[0].query(By.css('ion-img'));

    expect(classCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });
  //Meld
});
