import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CardsService } from './cards.service';

describe('CardsService', () => {
  let cardService: CardsService;
  let httpTestingController: HttpTestingController;
  let succeeded = false;
  let baseUrl = 'https://api.magicthegathering.io/v1/sets';
  const mockResponse = {
    "cards": [
      {
        "name": "Meandering Towershell",
        "manaCost": "{3}{G}{G}",
        "cmc": 5,
        "colors": [
          "Green"
        ],
        "type": "Creature — Turtle",
        "types": [
          "Creature"
        ],
        "subtypes": [
          "Turtle"
        ],
      }
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
  describe('Sets API Tests', () => {
    it('should get cards  based on setId', () => {
      let id = "KTK";
      cardService.getCards(id).subscribe((resp) => {
        succeeded = true;
        expect(resp).not.toBe({ empty: true });
        expect(resp).toEqual(mockResponse, 'should return expected results'), fail;
        expect(succeeded).toBeTrue();
      });

      const req = httpTestingController.expectOne(baseUrl + '/' + id + '/booster');
      expect(req.request.method).toEqual('GET');

      req.flush(mockResponse);

      httpTestingController.verify();
    });
  })

});
