import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SetsService } from './sets.service';

describe('SetsService', () => {
  let setService: SetsService;
  let httpTestingController: HttpTestingController;
  let succeeded = false;
  let baseUrl = 'https://api.scryfall.com/sets';

  const mockResponse = {
    "object": "list",
    "has_more": false,
    "data": [
      {
        "object": "set",
        "id": "78a7f4da-4838-4011-9f58-de8020d1fd2d",
        "code": "cc2",
        "tcgplayer_id": 2905,
        "name": "Commander Collection: Black",
        "uri": "https://api.scryfall.com/sets/78a7f4da-4838-4011-9f58-de8020d1fd2d",
        "scryfall_uri": "https://scryfall.com/sets/cc2",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acc2&unique=prints",
        "released_at": "2022-01-28",
        "set_type": "from_the_vault",
        "card_count": 9,
        "digital": false,
        "nonfoil_only": false,
        "foil_only": false,
        "icon_svg_uri": "https://c2.scryfall.com/file/scryfall-symbols/sets/cc2.svg?1636952400"
      }
    ]
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SetsService],
    });

    setService = TestBed.inject(SetsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(setService).toBeTruthy();
  });


  // Test get all sets
  it('should make get request for sets', () => {
    setService.getSets().subscribe((resp) => {
      succeeded = true;
      expect(resp).not.toBe({ empty: true });
      expect(resp).toEqual(mockResponse, 'should return expected results'), fail;
      expect(succeeded).toBeTrue();
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);

    httpTestingController.verify();
  });

  // Test get single set based on Id
  it('should get a single set based on Id', () => {
    let id = "aer";
    setService.getSingleSet(id).subscribe((resp) => {
      succeeded = true;
      expect(resp).not.toBe({ empty: true });
      expect(resp).toEqual(mockResponse, 'should return expected results'), fail;
      expect(succeeded).toBeTrue();
    });

    const req = httpTestingController.expectOne(baseUrl + '/' + id);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);

    httpTestingController.verify();
  });




});


