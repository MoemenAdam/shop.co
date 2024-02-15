export default function AddToCart (arr,setCart,setCost,num=0,type='add' ){
  if(type==='empty'){
    localStorage.setItem('cart',JSON.stringify([]))
    setCart(0)
    setCost(0)
    return []
  }

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
  num = num === 0 ? arr.Quantity : num
  // if the product is in the cart
  if(index !== -1){
    // update the quantity
    cart[index].Quantity += num;
    // if the quantity is less than 1
    if(cart[index].Quantity < 1){
      // remove the product from the cart
      cart.splice(index,1)
    }
  }
  else{
    // add the product to the cart
    cart.push(arr)
    
  }

  setCart(cart.length);
  setCost(cart.reduce((holder, a) => holder + a.cost*a.Quantity,0));
  // save the cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart))
  // return the updated cart
  return cart
}