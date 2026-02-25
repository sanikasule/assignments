// useShallow does a 'shallow equality check' — it compares each property
// individually rather than comparing the whole object reference.
// Import useShallow from this specific path:

import { useShallow } from 'zustand/react/shallow'
import useCartStore from '../../stores/useCartStore'

function CartSummary() {
    // ── WITHOUT useShallow (not ideal) ──
    // const { getTotalItems, getTotalPrice } = useCartStore(state => ({
    // getTotalItems: state.getTotalItems,
    // getTotalPrice: state.getTotalPrice,}))

    // Problem: a NEW object is created every render → re-renders even without change

    // ── WITH useShallow (correct for multiple values) ──
    // useShallow compares each KEY in the returned object individually.
    // Component only re-renders if getTotalItems or getTotalPrice actually changed.

    const { getTotalItems, getTotalPrice } = useCartStore(
        useShallow((state) => ({
            getTotalItems: state.getTotalItems,
            getTotalPrice: state.getTotalPrice,
        }))
    )

    return (
        <div style={{ padding: '8px 16px', background: '#fef9e7', borderRadius: '4px' }}>
            <span>Items in cart: {getTotalItems()}</span>
            <span style={{ marginLeft: '16px' }}>
                Total: ${getTotalPrice().toFixed(2)} 
            </span> 
        </div> 
    ) 
} 
export default CartSummary;