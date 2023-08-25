import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/layout/Header/Header';
import ProductList from './components/products/ProductList/ProductList';
import ProductDetail from './components/products/ProductDetail/ProductDetail';
import Cart from './components/products/Cart/Cart'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          {/* other routes */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
