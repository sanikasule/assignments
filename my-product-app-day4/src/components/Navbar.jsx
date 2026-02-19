import { useCart } from '../context/CartContext'; 
import { useWishList } from '../context/WishListContext';
function Navbar({ onViewCart, onViewUsers, onViewWishList }) {
    const { getCartCount } = useCart(); 
    const cartCount = getCartCount(); 
    const { getWishListCount } = useWishList();
    const wishListCount = getWishListCount();
    return (
        <nav style={{ background: '#0066cc', color: 'white', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}> <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
        {/* Logo */} 
        <h2 style={{ margin: 0, fontSize: '24px' }}> 
            Shop Online 
        </h2> 
        {/* Cart Button */} 
        <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
            <button onClick={onViewCart} style={{ padding: '10px 20px', background: 'white', color: '#0066cc', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }} > 
            Cart

            {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#dc3545', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}> 
                    {cartCount} 
                </span>)} 
        </button>

        {/* WishList Button */} 
            <button onClick={onViewWishList} style={{ padding: '10px 20px', background: 'white', color: '#0066cc', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }} > 
            Wish List

            {wishListCount > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#dc3545', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}> 
                    {wishListCount} 
                </span>)} 
        </button>

        <button onClick={onViewUsers} style={{ padding: '10px 20px', background: 'white', color: '#0066cc', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }} > 
            Users
        </button> 
        </div> 
        </div> 
        </nav>
    );
} export default Navbar;