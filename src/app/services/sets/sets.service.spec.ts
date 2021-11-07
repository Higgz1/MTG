import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SetsService } from './sets.service';

describe('SetsService', () => {
  let setService: SetsService;
  let httpTestingController: HttpTestingController;
  let succeeded = false;
  let baseUrl = 'https://api.magicthegathering.io/v1/sets';

  const mockResponse = {
    "sets": [
      {
        "code": "10E",
        "name": "Tenth Edition",
        "type": "core",
        "booster": [
          "rare",
          "uncommon",
          "uncommon",
          "uncommon",
          "common",
          "common",
          "common",
          "common",
          "common",
          "common",
          "common",
          "common",
          "common",
          "common"
        ],
        "releaseDate": "2007-07-13",
        "block": "Core Set",
        "onlineOnly": false
      },
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

  describe('Sets API Tests', () => {
    
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
      let id = "KTK";
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

  })


});


