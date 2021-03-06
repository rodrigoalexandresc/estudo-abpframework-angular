import type { AuditedEntityDto } from '@abp/ng.core';
import type { CarType } from './car-type.enum';

export interface CarDTO extends AuditedEntityDto<string> {
  model?: string;
  type: CarType;
  buyDate?: string;
  price: number;
}

export interface CreateUpdateCarDto {
  model: string;
  type: CarType;
  buyDate: string;
  price: number;
}
