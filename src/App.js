import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/layout/Header/Header';
import DynamicHeader from './components/layout/Header/DynamicHeader';
import ProductList from './components/products/ProductList/ProductList';
import ProductDetail from './components/products/ProductDetail/ProductDetail';
import Cart from './components/products/Cart/Cart'; 
import LandingPage from './components/pages/LandingPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <DynamicHeader />
        <Header />
        <Routes>
          <Route path="/" exact component={LandingPage} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
