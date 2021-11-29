import { HttpErrorResponse } from '@angular/common/http';
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
      }, {
        "object": "set",
        "id": "a4a0db50-8826-4e73-833c-3fd934375f96",
        "code": "aer",
        "mtgo_code": "aer",
        "arena_code": "aer",
        "tcgplayer_id": 1857,
        "name": "Aether Revolt",
        "uri": "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
        "scryfall_uri": "https://scryfall.com/sets/aer",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aaer&unique=prints",
        "released_at": "2017-01-20",
        "set_type": "expansion",
        "card_count": 194,
        "printed_size": 184,
        "digital": false,
        "nonfoil_only": false,
        "foil_only": false,
        "block_code": "kld",
        "block": "Kaladesh",
        "icon_svg_uri": "https://c2.scryfall.com/file/scryfall-symbols/sets/aer.svg?1637557200"
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

  afterEach(() => {
    // console.log('verified');
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(setService).toBeTruthy();
  });

  // Test get all sets
  it('should retrieve all sets', () => {

    let actualSets: {} | undefined;
    setService.getSets().subscribe((resp) => {

      succeeded = true;
      actualSets = resp;

      expect(succeeded).toBeTrue();
      expect(actualSets).toBeTruthy('No sets were returned');
      expect(actualSets).toEqual(mockResponse, 'should return expected results'), fail;
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  // Test get single set based on Id
  it('should get a single set based on Id', () => {
    let code = "aer";

    setService.getSingleSet(code).subscribe((resp: any) => {
      succeeded = true;
      const actualSet = resp;

      expect(succeeded).toBeTrue();
      expect(actualSet).toEqual(mockResponse.data[1], 'should return expected results'), fail;
      expect(actualSet.code).toEqual(code, 'should return expected results'), fail;

    });

    const req = httpTestingController.expectOne(baseUrl + '/' + code);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse.data[1]);

  });

  //Testing the error handling of getSets()
  it('should give an error if getSets() fails', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');

    let actualError: HttpErrorResponse | undefined;

    setService.getSets().subscribe(
      () => {
        fail('next handler must not be called');
      },
      (error) => {
        actualError = error;
        expect(actualError.error).toBe(errorEvent);
        expect(actualError.status).toBe(status);
        expect(actualError.statusText).toBe(statusText);
      },
      () => {
        fail('complete handler must not be called');
      },
    );

    const req = httpTestingController.expectOne(baseUrl).error(
      errorEvent,
      { status, statusText }
    );

    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
  });

  //Testing the error handling of getSet(id)
  it('should give an error if getSingleSet(code) fails', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
    let id = "aer",
      actualError: HttpErrorResponse | undefined;

    setService.getSingleSet(id).subscribe(
      () => {
        fail('the get by code opertaion should have failed');
      },
      (error: HttpErrorResponse) => {
        actualError = error;
        expect(actualError.error).toBe(errorEvent);
        expect(actualError.status).toBe(status);
        expect(actualError.statusText).toBe(statusText);


      },
      () => {
        fail('complete handler must not be called');
      },
    );

    const req = httpTestingController.expectOne(baseUrl + '/' + id).error(
      errorEvent,
      { status, statusText }
    );

    if (!actualError) {
      throw new Error('Error needs to be defined');
    }

  });

});


