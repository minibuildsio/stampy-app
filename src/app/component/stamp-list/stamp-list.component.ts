import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stamp } from 'src/app/model';
import { StampyService } from 'src/app/service/stampy.service';

@Component({
  selector: 'app-stamp-list',
  templateUrl: './stamp-list.component.html',
  styleUrls: ['./stamp-list.component.css']
})
export class StampListComponent {

  private stamps$: Observable<Stamp[]>;

  constructor(private stampService: StampyService) {
    this.stamps$ = this.stampService.getStamps();
  }

}
