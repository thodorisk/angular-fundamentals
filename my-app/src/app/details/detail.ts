export interface Detail {
    id: number;
    name: string;
    surname: string;
    date: string;
    status: number;
}

export enum StatusTypes {
  OK = 1,
  Error
}