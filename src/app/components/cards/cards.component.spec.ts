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
      {
        object: 'card',
        id: 'd18396f9-ae20-4471-84ab-a2148319bc39',
        oracle_id: '7cb47a7e-fe60-45a2-9c07-bd5c6ddca82d',
        multiverse_ids: [503817],
        mtgo_id: 87745,
        arena_id: 75248,
        tcgplayer_id: 230718,
        cardmarket_id: 531232,
        name: 'Arni Slays the Troll',
        lang: 'en',
        released_at: '2021-02-05',
        uri: 'https://api.scryfall.com/cards/d18396f9-ae20-4471-84ab-a2148319bc39',
        scryfall_uri:
          'https://scryfall.com/card/khm/201/arni-slays-the-troll?utm_source=api',
        layout: 'saga',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.jpg?1631051127',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.jpg?1631051127',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.jpg?1631051127',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.png?1631051127',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.jpg?1631051127',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/1/d18396f9-ae20-4471-84ab-a2148319bc39.jpg?1631051127',
        },
      },
      {
        object: 'card',
        id: '32158458-42eb-41bc-a15a-11af28463eb0',
        oracle_id: 'db6fbdc9-1c45-416f-a08e-2082f65adb65',
        multiverse_ids: [473000],
        mtgo_id: 78176,
        arena_id: 70185,
        tcgplayer_id: 198549,
        cardmarket_id: 399169,
        name: 'Animating Faerie // Bring to Life',
        lang: 'en',
        released_at: '2019-10-04',
        uri: 'https://api.scryfall.com/cards/32158458-42eb-41bc-a15a-11af28463eb0',
        scryfall_uri:
          'https://scryfall.com/card/eld/38/animating-faerie-bring-to-life?utm_source=api',
        layout: 'adventure',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.jpg?1572489832',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.jpg?1572489832',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.jpg?1572489832',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.png?1572489832',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.jpg?1572489832',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/2/32158458-42eb-41bc-a15a-11af28463eb0.jpg?1572489832',
        },
      },
      {
        object: 'card',
        id: 'c5287e77-890d-41bd-acc6-7a8f1866426d',
        oracle_id: '156107a0-1657-4d04-904c-f8d19df32ff8',
        multiverse_ids: [212578],
        tcgplayer_id: 37086,
        cardmarket_id: 240528,
        name: 'A Display of My Dark Power',
        lang: 'en',
        released_at: '2010-06-18',
        uri: 'https://api.scryfall.com/cards/c5287e77-890d-41bd-acc6-7a8f1866426d',
        scryfall_uri:
          'https://scryfall.com/card/oarc/8%E2%98%85/a-display-of-my-dark-power?utm_source=api',
        layout: 'scheme',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.png?1562252706',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c5287e77-890d-41bd-acc6-7a8f1866426d.jpg?1562252706',
        },
      },
      {
        object: 'card',
        id: '61b07ae0-44f5-4ffe-a33b-96885d4fc26b',
        oracle_id: 'eaa10dee-89da-43eb-b339-1cf59e488344',
        multiverse_ids: [182290],
        mtgo_id: 19,
        name: 'Akroma, Angel of Wrath Avatar',
        lang: 'en',
        released_at: '2003-01-01',
        uri: 'https://api.scryfall.com/cards/61b07ae0-44f5-4ffe-a33b-96885d4fc26b',
        scryfall_uri:
          'https://scryfall.com/card/pmoa/33/akroma-angel-of-wrath-avatar?utm_source=api',
        layout: 'vanguard',
        highres_image: true,
        image_status: 'highres_scan',
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.jpg?1562917989',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.jpg?1562917989',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.jpg?1562917989',
          png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.png?1562917989',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.jpg?1562917989',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/1/61b07ae0-44f5-4ffe-a33b-96885d4fc26b.jpg?1562917989',
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

  //saga card
  it('should create saga card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'saga'
    )[0];

    fixture.detectChanges();

    const sagaCard = el.queryAll(By.css('ion-card')),
      img = sagaCard[0].query(By.css('ion-img'));

    expect(sagaCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  //adventure card
  it('should create adventure card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'adventure'
    )[0];

    fixture.detectChanges();

    const adventureCard = el.queryAll(By.css('ion-card')),
      img = adventureCard[0].query(By.css('ion-img'));

    expect(adventureCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  // scheme card
  it('should create scheme card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'scheme'
    )[0];

    fixture.detectChanges();

    const schemeCard = el.queryAll(By.css('ion-card')),
      img = schemeCard[0].query(By.css('ion-img'));

    expect(schemeCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  // vanguard card
  fit('should create vanguard card', () => {
    cardsListcomponent.card = mockResponse.data.filter(
      (card) => card.layout == 'vanguard'
    )[0];

    fixture.detectChanges();

    const vanguardCard = el.queryAll(By.css('ion-card')),
      img = vanguardCard[0].query(By.css('ion-img'));

    expect(vanguardCard).toBeTruthy('Could not find card');
    expect(img.nativeElement.src).toBe(
      cardsListcomponent.card.image_uris.normal
    );
  });

  //Meld card

  // Planar card
});
