import { FileHandle } from './file_handle.model';

export interface Product{
    productName:string,
    productDescription:string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]

}