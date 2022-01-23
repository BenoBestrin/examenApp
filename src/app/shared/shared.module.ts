import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
  ],
  imports: [
    NgbModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
})
export class SharedModule {}
