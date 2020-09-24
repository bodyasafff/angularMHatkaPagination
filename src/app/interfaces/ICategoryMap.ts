import { IChildCategoryMap } from '../interfaces/IChildCategoryMap';

export interface ICategoryMap{
    Id:number,
    Name:string,
    Groups:IChildCategoryMap[]
}