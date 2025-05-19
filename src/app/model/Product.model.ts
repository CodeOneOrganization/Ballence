export enum size{
  xxs ='xxs',
  xs = 'xs',
  s = 's',
  m ='m',
  l ='l',
  xl = 'xl',
  xxl = 'xxl'
}

export interface filter {
  brand: string | undefined,
  size: size | undefined
}

export interface IProductPost{
  name: string;
  brand: string;
  price: number;
  img: File;

  description: string;

  isNew: boolean;
  type: string;
  color: string;

  size: size;
}

export interface IProducts{
  id: string;
  
  name: string;
  brand: string;
  price: number;
  photo: string[];

  description: string;

  isNew: boolean;
  type: string;
  color: string;

  size: size;
}