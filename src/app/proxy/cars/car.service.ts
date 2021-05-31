import type { CarDTO, CreateUpdateCarDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiName = 'Default';

  create = (input: CreateUpdateCarDto) =>
    this.restService.request<any, CarDTO>({
      method: 'POST',
      url: '/api/app/car',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/car/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, CarDTO>({
      method: 'GET',
      url: `/api/app/car/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<CarDTO>>({
      method: 'GET',
      url: '/api/app/car',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateCarDto) =>
    this.restService.request<any, CarDTO>({
      method: 'PUT',
      url: `/api/app/car/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
