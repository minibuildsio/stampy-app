import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StampyClientService } from './stampy-client.service';
import { Stamp } from '../model';

describe('StampyClientService', () => {
  let httpMock: HttpTestingController;
  let service: StampyClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(StampyClientService);
  });

  it('get stamps makes get request to /api/stamps', (done) => {
    service.getStamps().subscribe(stamps => {
      expect(stamps.length).toEqual(1);
      expect(stamps[0].id).toEqual(1);
      expect(stamps[0].name).toEqual('DC Collection - Alfred');
      done();
    });

    let request = httpMock.expectOne('/api/stamps')

    expect(request.request.method).toEqual('GET');

    request.flush([new Stamp(1, 'DC Collection - Alfred')]);

    httpMock.verify();
  });

  it('add stamp makes post request to /api/stamps', (done) => {
    service.addStamp('DC Collection - Batwomen').subscribe(stamp => {
      expect(stamp.id).toEqual(1);
      expect(stamp.name).toEqual('DC Collection - Batwomen');
      done();
    });

    let request = httpMock.expectOne('/api/stamps')

    expect(request.request.method).toEqual('POST');
    expect(request.request.body).toEqual({name: 'DC Collection - Batwomen'});

    request.flush(new Stamp(1, 'DC Collection - Batwomen'));

    httpMock.verify();
  });
});
