import { cart, loadCart } from "../data/cart.js";
import { loadProductFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
/*
new Promise((resolve) =>{
  console.log('start promise');
  loadProducts(() =>{
    console.log('finshed loading');
    resolve();
  });
}).then(() =>{
  console.log('next step');
});
*/

/*
new Promise((resolve) =>{
  loadProducts(() =>{
    resolve();
  });
}).then(() =>{
  let itemQuantity = 0;

  cart.forEach((cartItem) => {
    itemQuantity += Number(cartItem.quantity);
  });

  document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
loadProducts(() => {
  let itemQuantity = 0;

  cart.forEach((cartItem) => {
    itemQuantity += Number(cartItem.quantity);
  });

  document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() =>{
    let itemQuantity = 0;

    cart.forEach((cartItem) => {
      itemQuantity += Number(cartItem.quantity);
    });

    document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/


Promise.all([
  loadProductFetch(),
  new Promise((resolve) =>{
    console.log('next step');
    loadCart(() =>{
      resolve('value2');
    });
  })
]).then((values) =>{
    console.log(values);
      console.log('final step');
      let itemQuantity = 0;
    
      cart.forEach((cartItem) => {
        itemQuantity += Number(cartItem.quantity);
      });
    
      document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
      renderOrderSummary();
      renderPaymentSummary();
    });

// new Promise((resolve) =>{
//   console.log('start promise');
//   loadProducts(() =>{
//     console.log('finshed loading');
//     resolve('value1');
//   });

// }).then((value) =>{
//   console.log(value);
//   return new Promise((resolve) =>{
//     console.log('next step');
//     loadCart(() =>{
//       resolve('value2');
//     });
// });

// }).then((value) =>{
//   console.log(value);
//   console.log('final step');
//   let itemQuantity = 0;

//   cart.forEach((cartItem) => {
//     itemQuantity += Number(cartItem.quantity);
//   });

//   document.querySelector('.js-return-to-home-link').innerHTML = `${itemQuantity} items`;
//   renderOrderSummary();
//   renderPaymentSummary();
// });
  
