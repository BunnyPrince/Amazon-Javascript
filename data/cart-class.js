class Cart {
  cartItems;
  #localStoragekey; 

  constructor(localStoragekey){
    this.#localStoragekey = localStoragekey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStoragekey));
  
    if(!this.cartItems) {
      this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

  saveToStrorage(){
    localStorage.setItem(this.#localStoragekey, JSON.stringify(this.cartItems))
  }

  addToCart(productId){
    let matchingItem;
        
    this.cartItems.forEach((CartItem) => {
      if(CartItem.productId === productId){
        matchingItem = CartItem;
      }
    });
  
    if(matchingItem){
      matchingItem.quantity++;
    }else{
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }
  
    this.saveToStrorage();
  }

  removeFromCart(productId){
    const newCart = [];
  
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
  
    this.saveToStrorage();
  }

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
        
    this.cartItems.forEach((CartItem) => {
      if(CartItem.productId === productId){
        matchingItem = CartItem;
      }
    });
  
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStrorage();
  }

  updateCartQuantity(productId, quantity){
    let matchingItem;
        
    this.cartItems.forEach((CartItem) => {
      if(CartItem.productId === productId){
        matchingItem = CartItem;
      }
    });
  
    matchingItem.quantity = quantity;
    this.saveToStrorage();
  }

  getTotalCartQuantity(){
    let quantity = 0;
    this.cartItems.forEach((cartItem) => {
      quantity += Number(cartItem.quantity);
    });
  
    return quantity;
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart);
console.log(businessCart);