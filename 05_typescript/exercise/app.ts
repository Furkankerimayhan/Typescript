import { Product } from "./product";
import { ProductService } from "./ProductService"; 

let _productServise = new ProductService();

let result;

result = _productServise.getProducts();
result = _productServise.getById(2);

let p = new Product();

p.id = 2;
p.name ="Iphone 6";
p.price = 4000;
p.category = "Telefon";

_productServise.saveProduct(p);
//_productServise.deleteProduct(result);
result = _productServise.getProducts();

console.log(result);