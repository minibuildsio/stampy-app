import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampInputComponent } from './stamp-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StampInputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    StampInputComponent
  ]
})
export class StampInputModule { }
