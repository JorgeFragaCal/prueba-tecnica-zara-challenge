import { useCart } from '@/context/CartContext'
import { ProductCardCart } from '@/ui/components'
import { Footer } from '@/ui/pages/cart/components/footer/Footer'
export const CartPage = () => {
  const { cartItems } = useCart()
  return (
    <main className='full-width' aria-live='assertive'>
      <h1>
        Cart ({cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0)})
      </h1>
      <section className='grid-layout grid-layout__cart'>
        {cartItems.map((item) => (
          <ProductCardCart key={item.id} product={item} />
        ))}
      </section>
      <Footer cartItems={cartItems} />
    </main>
  )
}
