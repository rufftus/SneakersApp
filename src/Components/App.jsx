import Banner from './Banner';
import ShoppingList from './ShoppingList';
import {useState, useEffect} from 'react';
import Cart from './Cart';
import '../styles/App.css';

function App() {
  const [cart, setCart]=useState(() => {
    const savedCart=localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  }, {cart});

  const addToCart=(sneaker)=>{
    setCart(prevCart=>{
      const exiistingItem=prevCart.find(item=>item.id===sneaker.id);

      if (exiistingItem){
        return prevCart.map(item=>
          item.id===sneaker.id
          ?{...item,quantity:item.quantity+1}
          :item
        );
      } else{
        return[...prevCart, {...sneaker,quantity:1}];
      }
    });
  };

  return (
<div className='App'>
  <Banner/>
  <ShoppingList onAddToCart={addToCart}/>
  <Cart cartItems={cart}/>
</div>
  );
}

export default App;
