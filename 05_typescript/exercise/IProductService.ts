import { Product } from "./product"

export interface IProductServices{
    getById(id: number): Product;
    getProducts(): Array<Product>;
    saveProduct(product: Product): void;
    deleteProduct(product: Product): void;
}