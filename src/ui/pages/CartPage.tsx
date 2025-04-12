import { useCart } from '@/context/CartContext'
import { ProductCardCart } from '@/ui/components'
export const CartPage = () => {
  const { cartItems } = useCart()
  return (
    <main className='full-width' aria-live='assertive'>
      <h1>Cart ({cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0)})</h1>
      <section className='grid-layout'>
        {cartItems.map((item) => (
          <ProductCardCart key={item.id} product={item} />
        ))}
      </section>
    </main>
  )
}
