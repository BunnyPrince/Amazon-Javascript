import { cart } from "../data/cart.js";
import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

loadProducts(() => {
  let itemQuantity = 0;

    cart.forEach((cartItem) => {
      itemQuantity += Number(cartItem.quantity);
    });

    document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
    renderOrderSummary();
    renderPaymentSummary();
});

  
    
  
