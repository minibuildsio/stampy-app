import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Stamp } from '../model';
import { StampyClientService } from './stampy-client.service';

import { StampyService } from './stampy.service';

describe('StampyService', () => {
  let stampyClient = jasmine.createSpyObj('StampyClientService', ['getStamps', 'addStamp']);
  let service: StampyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: StampyClientService, useValue: stampyClient}]
    });

    stampyClient.getStamps.and.returnValue(of([]));
    service = TestBed.get(StampyService);
  });

  it('loading stamps notifies observers', (done) => {
    stampyClient.getStamps.and.returnValue(of([new Stamp(1, 'Two Penny Blue')]));

    service.loadStamps();

    service.getStamps().subscribe(stamps => {
      expect(stamps.length).toEqual(1);
      expect(stamps[0].id).toEqual(1);
      expect(stamps[0].name).toEqual('Two Penny Blue');
      done();
    });
  });

  it('add stamp updates existing stamp list and  notifies observers', (done) => {
    stampyClient.getStamps.and.returnValue(of([new Stamp(1, 'Edward VII 6d Pale Dull Purple')]));
    stampyClient.addStamp.and.returnValue(of(new Stamp(2, 'Two Penny Blue')));

    service.loadStamps();
    service.addStamp('Two Penny Blue');
    
    service.getStamps().subscribe(stamps => {
      expect(stamps.length).toEqual(2);

      expect(stamps[0].id).toEqual(1);
      expect(stamps[0].name).toEqual('Edward VII 6d Pale Dull Purple');
      
      expect(stamps[1].id).toEqual(2);
      expect(stamps[1].name).toEqual('Two Penny Blue');
      done();
    });
  });

});
