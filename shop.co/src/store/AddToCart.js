export default function AddToCart (arr,setCart ){
  // get the cart from local storage
  let cart = localStorage.getItem('cart')
  // if the cart is empty
  if(!cart){
    // create a new cart
    cart = []
  }
  else{
    // parse the cart
    cart = JSON.parse(cart)
  }
  // check if the product is already in the cart
  const index = cart.findIndex(e=> e.id === arr.id && e.color === arr.color && e.size === arr.size)
  // if the product is in the cart
  if(index !== -1){
    // update the quantity
    cart[index].quantity += arr.Quantity
  }
  else{
    // add the product to the cart
    cart.push(arr)
    setCart(prev=>prev+1);
  }
  // save the cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart))
  // return the updated cart
  return cart
}