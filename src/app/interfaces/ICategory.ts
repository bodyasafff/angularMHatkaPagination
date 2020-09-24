import { IChildCategory } from '../interfaces/IChildCategory';

export interface ICategory{
    id:number,
    name:string,
    selected:boolean,
    childCategories:IChildCategory[]
}