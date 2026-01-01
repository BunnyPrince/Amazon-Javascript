import { cart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";


export function renderPaymentSummary(){
  let itemPriceCents = 0;
  let itemQuantity = 0;
  let itemDeliveryPriceCents = 0;

  cart.forEach((cartItem) => {
    let matchingProduct;
    
    products.forEach((product) =>{
      if(product.id === cartItem.productId){
        matchingProduct = product;
      }
    });

    deliveryOptions.forEach((option) => {
      if(option.id === cartItem.deliveryOptionId){
        itemDeliveryPriceCents += option.priceCents;
      }
    });

    itemPriceCents += (matchingProduct.priceCents * cartItem.quantity);

    itemQuantity += cartItem.quantity;
    
  });

  const totalBeforTax = itemPriceCents+itemDeliveryPriceCents;
  const estimatedTax = (10 / 100) *  totalBeforTax;

  const orderSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${itemQuantity}):</div>
      <div class="payment-summary-money">$${formatCurrency(itemPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(itemDeliveryPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforTax+estimatedTax)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = orderSummaryHTML;
}