import { ProductListPage, ProductDetailPage, CartPage } from '@/ui/pages'
import { Switch, Route } from 'wouter'
import { Header } from '@/ui/components'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route path='/' component={ProductListPage} />
        <Route path='/product/:id'>
          {(params: { id: string }) => <ProductDetailPage id={params.id} />}
        </Route>
        <Route path='/cart' component={CartPage} />
        <Route>
          <main>
            <h1>404: No such page!</h1>
          </main>
        </Route>
      </Switch>
    </CartProvider>
  )
}

export default App
