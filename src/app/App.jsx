import React from 'react';
import './App.css';
import { ProductDetails } from './ProductDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => <>
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductDetails }/>
        <Route path="/product/:productId" component={ ProductDetails }/>
      </Switch>
    </Router>
  </>;

export default App;
