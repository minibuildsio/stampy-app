import { Component, OnInit } from '@angular/core';
import { StampyStateService } from 'src/app/service/stampy.service';

@Component({
  selector: 'app-stamp-input',
  templateUrl: './stamp-input.component.html',
  styleUrls: ['./stamp-input.component.css']
})
export class StampInputComponent {

  stampName: string = ''; 

  constructor(private stampyService: StampyStateService) { }

  addStamp() {
    this.stampyService.addStamp(this.stampName);
  }

}
