import { Product } from './product';
export interface Driver {
    vin: string, 
    year: number, 
    brand: string, 
    color: string,
    percent: number,
    product?: Product[]
}
