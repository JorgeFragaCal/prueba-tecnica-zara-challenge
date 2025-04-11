import { ProductListPage, ProductDetailPage } from '@/ui/pages'
import { Switch, Route } from 'wouter'

function App() {
  return (
    <>
      <header>Hola</header>
      <Switch>
        <Route path='/' component={ProductListPage} />

        <Route path='/product/:id'>
          {(params: { id: string }) => <ProductDetailPage id={params.id} />}
        </Route>

        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
