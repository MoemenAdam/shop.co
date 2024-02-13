export default function AddToCart (arr){
  const cart = localStorage.getItem('cart')??[];
  cart.push(arr);
  localStorage.setItem('cart', cart);
}