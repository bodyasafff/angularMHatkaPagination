import { from } from "rxjs";
import { IProduct } from '../interfaces/IProduct'

export interface IDataProducts{
    countProducts:number,
    products:IProduct[]
}