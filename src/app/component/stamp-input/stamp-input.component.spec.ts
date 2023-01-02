import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StampyService } from 'src/app/service/stampy.service';

import { StampInputComponent } from './stamp-input.component';
import { StampInputModule } from './stamp-input.module';

describe('StampInputComponent', () => {
  let component: StampInputComponent;
  let fixture: ComponentFixture<StampInputComponent>;
  let stampyService = jasmine.createSpyObj('StampyService', ['getStamps', 'addStamp']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ StampInputComponent ],
      providers: [
        {provide: StampyService, useValue: stampyService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
