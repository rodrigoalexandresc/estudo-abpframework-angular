import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarDTO, CarService, carTypeOptions } from '@proxy/cars';

import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers: [
    ListService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter  }
  ]
})
export class CarComponent implements OnInit {
  car = { items: [], totalCount: 0 } as PagedResultDto<CarDTO>;

  selectedCar = {} as CarDTO;

  form: FormGroup;

  carTypes = carTypeOptions;

  isModalOpen = false;

  constructor(public readonly list: ListService, 
    private carService: CarService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService) { }

  ngOnInit(): void {
    const carStreamCreator = (query) => this.carService.getList(query);

    this.list.hookToQuery(carStreamCreator).subscribe((response) => {
      this.car = response;
    })
  }

  createCar() {
    this.buildForm();
    this.isModalOpen = true;
  }

  editCar(id: string) {
    this.carService.get(id).subscribe((car) => {
      this.selectedCar = car;
      this.buildForm();
      this.isModalOpen = true;
    })
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.carService.delete(id).subscribe(() => this.list.get());
      }
    })
  }

  buildForm() {
    this.form = this.fb.group({
      model: [this.selectedCar.model || '', Validators.required],
      type: [this.selectedCar.type || null, Validators.required],
      buyDate: [this.selectedCar.buyDate || null, Validators.required],
      price: [this.selectedCar.price || null, Validators.required]
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedCar.id 
      ? this.carService.update(this.selectedCar.id, this.form.value)
      : this.carService.create(this.form.value);

      request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    })
  }

}
