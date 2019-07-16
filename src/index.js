import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { TshirtList } from './TshirtList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Cart />
        <TshirtList />
      </div>
    </CartProvider>
  )
}

render(<App />, document.getElementById('root'));
