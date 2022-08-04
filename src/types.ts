import { Dispatch, SetStateAction } from "react";

export interface IProduct {
  id: number;
  name: string;
  fullName: string;
  imagePath: string;
  price: number;
  characteristics: {
    screenDiagonal: string;
    screenResolution: string;
    matrixType: string;
    processor: string;
    processorFrequency: string;
    ram: string;
    gpu: string;
    ssd: string;
    operatingSystem: string;
  };
}

export interface IStores {
  address: string;
  addressDesc: string;
  timetable: string;
  telephone: string;
}

export interface ICartItem extends IProduct {
  count: number;
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;
