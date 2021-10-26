import { Switch, Route } from 'react-router-dom'
import  { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Cart" component={Cart}/>
      <Route path="/Product" component={Product}/>
    </Switch>
  )
}