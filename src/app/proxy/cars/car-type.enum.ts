import { mapEnumToOptions } from '@abp/ng.core';

export enum CarType {
  Undefined = 0,
  Hatchback = 1,
  Sedan = 2,
  SW = 3,
  SUV = 4,
  Pickup = 5,
  Citycar = 6,
  Sport = 7,
}

export const carTypeOptions = mapEnumToOptions(CarType);
