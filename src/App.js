import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Data from "./data.json";

import About from "./components/about/About.component";
import Home from "./components/home/Home.component";
import Menu from "./components/menu/Menu.component";
import Product from "./components/product/Product.component";
import ProductInfo from "./components/product/ProductInfo.component";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/product"
            exact
            component={() => <Product data={Data} key={Data.id} />}
          />

          <Route
            path="/product/:id"
            component={({ match }) => (
              <ProductInfo data={Data} id={match.params.id} />
            )}
          />

          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
