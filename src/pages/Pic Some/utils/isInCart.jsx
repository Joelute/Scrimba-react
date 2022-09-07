export default function isInCart(cartItems, id) {
    return (cartItems.some(item => item.id == id))
}