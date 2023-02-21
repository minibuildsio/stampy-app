import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from 'src/app/model';
import { StampyStateService } from 'src/app/service/stampy.service';

@Component({
  selector: 'app-stamp-list',
  templateUrl: './stamp-list.component.html',
  styleUrls: ['./stamp-list.component.css']
})
export class StampListComponent {

  stamps$: Observable<Stamp[]>;

  constructor(private stampService: StampyStateService) {
    this.stamps$ = this.stampService.getStamps();
  }

}
