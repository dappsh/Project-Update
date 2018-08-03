import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './containers/Home/home';

import Header from './components/Header/header'
import About from './containers/about'
import Karl from './containers/Home/karl'
import Template from './containers/template'
import Carousel from './components/Carousel/carousel';
import ProductCarousel from './components/Carousel/productCarousel';
import CheckOut from './components/CheckOut/checkOut';
import ProductDetails from './components/ProductDetails/productDetails';

import Login from './components/LoginSignUp/login'
import SignUp from './components/LoginSignUp/signUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Test/> */}
        {/* <About/> */}
        {/* <Karl/> */}
        {/* <Header/>  */}
        {/* <Carousel/> */}
        {/* <ProductCarousel/> */}
        {/* <Template/> */}
        {/* <Footer/> */}
        {/* <SideNav/> */}
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <CheckOut/> */}
        {/* <ProductDetails/> */}


        <div>
          <Route exact path="/" component={Home} />
          {/* <Route path="/article" component={Article} />
          <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} /> */}
        </div>
      </div>
    );
  }
}

export default App;
