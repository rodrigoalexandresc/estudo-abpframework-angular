import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { CarDTO, CarService } from '@proxy/cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  car = { items: [], totalCount: 0 } as PagedResultDto<CarDTO>;

  constructor(public readonly list: ListService, private carService: CarService) { }

  ngOnInit(): void {
    const carStreamCreator = (query) => this.carService.getList(query);

    this.list.hookToQuery(carStreamCreator).subscribe((response) => {
      this.car = response;
    })
  }

}
