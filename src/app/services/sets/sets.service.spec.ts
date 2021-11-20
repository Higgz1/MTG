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

    let actualSets: {} | undefined;
    setService.getSets().subscribe((resp) => {
      succeeded = true;
      actualSets = resp;
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
    httpTestingController.verify();

    expect(succeeded).toBeTrue();
    expect(actualSets).toEqual(mockResponse, 'should return expected results'), fail;
  });


  // Test get single set based on Id
  it('should get a single set based on Id', () => {
    let id = "aer";
    let actualSet: {} | undefined;

    setService.getSingleSet(id).subscribe((resp) => {
      succeeded = true;
      actualSet = resp;
    });

    const req = httpTestingController.expectOne(baseUrl + '/' + id);
    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
    httpTestingController.verify();

    expect(succeeded).toBeTrue();
    expect(actualSet).toEqual(mockResponse, 'should return expected results'), fail;
  });

  //Testing the error handling of getSets()
  it('Testing the error handling of getSets()', () => {
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
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });

  //Testing the error handling of getSet(id)
  it('Testing the error handling of getSingleSet(id)', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
    let id = "aer";
    let actualError: HttpErrorResponse | undefined;

    setService.getSingleSet(id).subscribe(
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

    const req = httpTestingController.expectOne(baseUrl + '/' + id).error(
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


