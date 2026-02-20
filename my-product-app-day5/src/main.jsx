import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 
import { CartProvider } from './context/CartContext' 
import { WishListProvider } from './context/WishListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <CartProvider> 
      <WishListProvider>
        <App />
      </WishListProvider> 
    </CartProvider> 
  </React.StrictMode>, 
)
