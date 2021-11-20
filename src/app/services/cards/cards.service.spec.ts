import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


import { CardsService } from './cards.service';

describe('CardsService', () => {
  let cardService: CardsService;
  let httpTestingController: HttpTestingController;
  let succeeded = false;
  let setsUrl = 'https://api.scryfall.com/cards/search?order=set&q=e%3Ammq&unique=prints"';

  const mockResponse = {
    "object": "list",
    "total_cards": 350,
    "has_more": true,
    "next_page": "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=2&q=e%3Ammq&unique=prints",
    "data": [
      {
        "object": "card",
        "id": "8fa2ecf9-b53c-4f1d-9028-ca3820d043cb",
        "oracle_id": "4c13e2b5-961a-4031-84b1-15bd19b94286",
        "multiverse_ids": [
          19549
        ],
        "mtgo_id": 13569,
        "mtgo_foil_id": 13570,
        "tcgplayer_id": 6422,
        "cardmarket_id": 11374,
        "name": "Afterlife",
        "lang": "en",
        "released_at": "1999-10-04",
        "uri": "https://api.scryfall.com/cards/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb",
        "scryfall_uri": "https://scryfall.com/card/mmq/1/afterlife?utm_source=api",
        "layout": "normal",
        "highres_image": true,
        "image_status": "highres_scan",
        "image_uris": {
          "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.jpg?1562381856",
          "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.jpg?1562381856",
          "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.jpg?1562381856",
          "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.png?1562381856",
          "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.jpg?1562381856",
          "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/f/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb.jpg?1562381856"
        },
        "mana_cost": "{2}{W}",
        "cmc": 3.0,
        "type_line": "Instant",
        "oracle_text": "Destroy target creature. It can't be regenerated. Its controller creates a 1/1 white Spirit creature token with flying.",
        "colors": [
          "W"
        ],
        "color_identity": [
          "W"
        ],
        "keywords": [],
        "legalities": {
          "standard": "not_legal",
          "future": "not_legal",
          "historic": "not_legal",
          "gladiator": "not_legal",
          "pioneer": "not_legal",
          "modern": "not_legal",
          "legacy": "legal",
          "pauper": "legal",
          "vintage": "legal",
          "penny": "legal",
          "commander": "legal",
          "brawl": "not_legal",
          "historicbrawl": "not_legal",
          "paupercommander": "legal",
          "duel": "legal",
          "oldschool": "not_legal",
          "premodern": "legal"
        },
        "games": [
          "paper",
          "mtgo"
        ],
        "reserved": false,
        "foil": true,
        "nonfoil": true,
        "finishes": [
          "nonfoil",
          "foil"
        ],
        "oversized": false,
        "promo": false,
        "reprint": true,
        "variation": false,
        "set_id": "385e11a4-492b-4d07-b4a6-a1409ef829b8",
        "set": "mmq",
        "set_name": "Mercadian Masques",
        "set_type": "expansion",
        "set_uri": "https://api.scryfall.com/sets/385e11a4-492b-4d07-b4a6-a1409ef829b8",
        "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ammq&unique=prints",
        "scryfall_set_uri": "https://scryfall.com/sets/mmq?utm_source=api",
        "rulings_uri": "https://api.scryfall.com/cards/8fa2ecf9-b53c-4f1d-9028-ca3820d043cb/rulings",
        "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4c13e2b5-961a-4031-84b1-15bd19b94286&unique=prints",
        "collector_number": "1",
        "digital": false,
        "rarity": "uncommon",
        "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        "artist": "Brian Snõddy",
        "artist_ids": [
          "770b4e16-de76-49ed-949f-84e6d2e06d25"
        ],
        "illustration_id": "ac01279c-8120-4f92-8938-b9c789e3535c",
        "border_color": "black",
        "frame": "1997",
        "full_art": false,
        "textless": false,
        "booster": true,
        "story_spotlight": false,
        "edhrec_rank": 9210,
        "prices": {
          "usd": "0.18",
          "usd_foil": "1.94",
          "usd_etched": null,
          "eur": "0.02",
          "eur_foil": "1.15",
          "tix": "0.09"
        },
        "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=19549",
          "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Afterlife&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Afterlife&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Afterlife",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Afterlife"
        },
        "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=6422&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Afterlife&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/13569?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
        }
      },

    ]
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService],
    });
    cardService = TestBed.inject(CardsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(cardService).toBeTruthy();
  });

  // Test get cards based on sets
  it('should get cards  based on setId', () => {

    let cards: {} | undefined;

    cardService.getCards(setsUrl).subscribe((resp) => {
      succeeded = true;
      cards = resp;
    });

    const req = httpTestingController.expectOne(setsUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
    httpTestingController.verify();

    expect(cards).toEqual(mockResponse, 'should return expected results'), fail;
    expect(succeeded).toBeTrue();
  });

  //Testing the error handling of getCards(id)
  it('Testing the error handling of getCards(url)', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
    let actualError: HttpErrorResponse | undefined;
 
    cardService.getCards(setsUrl).subscribe(
      () => {
        fail('next handler must not be called');
      },
      (error) => {
        actualError = error;
      },
      () => {
        fail('complete handler must not be called');
      },
    );

    const req = httpTestingController.expectOne(setsUrl).error(
      errorEvent,
      { status, statusText }
    );

    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });

});
