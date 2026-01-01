import { cart } from "../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

let itemQuantity = 0;

cart.forEach((cartItem) => {
  itemQuantity += Number(cartItem.quantity);
});

document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;

renderOrderSummary();
renderPaymentSummary();