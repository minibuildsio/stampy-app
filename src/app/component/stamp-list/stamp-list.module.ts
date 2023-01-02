import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampListComponent } from './stamp-list.component';



@NgModule({
  declarations: [StampListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StampListComponent
  ]
})
export class StampListModule { }
