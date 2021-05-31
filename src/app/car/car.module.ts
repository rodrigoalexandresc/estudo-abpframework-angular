import { NgModule } from '@angular/core';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CarComponent],
  imports: [
    CarRoutingModule,
    SharedModule
  ]
})
export class CarModule { }
