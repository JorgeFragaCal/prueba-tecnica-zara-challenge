import { ProductListPage, ProductDetailPage } from '@/ui/pages'
import { Switch, Route } from 'wouter'

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={ProductListPage} />

        <Route path='/product/:id'>
          {(params: { id: string }) => <ProductDetailPage id={params.id} />}
        </Route>

        <Route>404: No such page!</Route>
      </Switch>
    </main>
  )
}

export default App
