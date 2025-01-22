enum size{
  xxs ='xxs',
  xs = 'xs',
  s = 's',
  m ='m',
  l ='l',
  xl = 'xl',
  xxl = 'xxl'
}

export interface IProducts{
  id: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  photo: string[];
  brand: string;
  type: string;
  color: string;
  size: size;
}