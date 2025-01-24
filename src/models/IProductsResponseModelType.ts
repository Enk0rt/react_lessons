import {IProduct} from "./IProduct.ts";


//Модель даних котру ми отримуємо в результаті Аксіос запиту
export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}
