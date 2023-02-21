import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StampyStateService } from 'src/app/service/stampy.service';

import { StampListComponent } from './stamp-list.component';

describe('StampListComponent', () => {
  let component: StampListComponent;
  let fixture: ComponentFixture<StampListComponent>;
  let stampyService = jasmine.createSpyObj('StampyService', ['getStamps', 'addStamp']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampListComponent ],
      providers: [
        {provide: StampyStateService, useValue: stampyService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
