import { NgModule } from '@angular/core';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CarComponent],
  imports: [
    CarRoutingModule,
    SharedModule,
    NgbDatepickerModule
  ]
})
export class CarModule { }
