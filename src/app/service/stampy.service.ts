import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stamp } from '../model';
import { StampyClientService } from './stampy-client.service';

@Injectable({
  providedIn: 'root'
})
export class StampyService {

  private stamps$: BehaviorSubject<Stamp[]> = new BehaviorSubject<Stamp[]>([]);

  constructor(private client: StampyClientService) {
    this.loadStamps();
  }

  loadStamps() {
    this.client.getStamps().subscribe(stamps => this.stamps$.next(stamps));
  }

  getStamps(): Observable<Stamp[]> {
    return this.stamps$;
  }

  addStamp(name: string) {
    this.client.addStamp(name).subscribe(stamp => this.stamps$.next(this.stamps$.getValue().concat([stamp])));
  }

}
