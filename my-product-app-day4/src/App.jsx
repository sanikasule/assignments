import { useState } from 'react'; 
import { useCart } from './context/CartContext'; 
import { useWishList } from './context/WishListContext';
import Navbar from './components/Navbar'; 
import ProductList from './components/ProductList'; 
import ProductDetail from './components/ProductDetail'; 
import UserList from './components/UsersList';
import Cart from './components/Cart'; 
import WishList from './components/WishList';

function App() { 
  const [currentView, setCurrentView] = useState('products'); 
  const [selectedProductId, setSelectedProductId] = useState(null); 
  const { addToCart } = useCart(); 
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const handleViewDetails = (productId) => { setSelectedProductId(productId); setCurrentView('detail'); }; 
  const handleBackToProducts = () => { setCurrentView('products'); setSelectedProductId(null); }; 
  const handleViewCart = () => { setCurrentView('cart'); };
  const handleAddToCart = (product) => { addToCart(product); alert(`${product.title} added to cart!`); };
  const handleViewWishList = () => { setCurrentView('wishlist'); };
  const handleAddToWishList = (product) => { addToWishList(product); alert(`${product.title} added to wishlist!`); };
  const handleRemoveFromWishList = (product) => { removeFromWishList(product); alert(`${product.title} removed from wishlist!`); };
  const handleViewUsers = () => {          
    setCurrentView('users');
  }; 

  return ( 
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}> 
      <Navbar onViewCart={handleViewCart} onViewUsers={handleViewUsers} onViewWishList={handleViewWishList}/> 
        {currentView === 'products' && ( <ProductList onViewDetails={handleViewDetails} onAddToWishList={handleAddToWishList} onRemove={handleRemoveFromWishList} wishList={wishList}/> )} 
        {currentView === 'detail' && ( <ProductDetail productId={selectedProductId} onBack={handleBackToProducts} onAddToCart={handleAddToCart} onAddToWishList={handleAddToWishList}/> )} 
        {currentView === 'cart' && ( <Cart onClose={handleBackToProducts} /> )} 
        {currentView === 'wishlist' && ( <WishList onClose={handleBackToProducts} /> )} 
        {currentView === 'users' && (       
        <UserList onClose={handleBackToProducts}/>
        )}
    </div> 
    ); 
} 
export default App;