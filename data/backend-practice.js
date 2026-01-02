import { Products } from "./products.js";

const xhr = new XMLHttpRequest();
let product;

xhr.addEventListener('load', () =>{
  product = new Products(JSON.parse(xhr.response));
  console.log(product); 
});
xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();


