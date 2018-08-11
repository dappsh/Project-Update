import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home/home';
import Login from '../components/Login/login';
import SignUp from '../components/SignUp/signUp';
import Product from '../components/Product/product';
import CheckOut from '../components/CheckOut/checkOut';
import Cart from '../components/CartDetail/cartDetail';


// import About from './containers/about'
// import Karl from './containers/Home/karl'
// import Template from './containers/template'
// import Carousel from './components/Carousel/carousel';
// import ProductCarousel from './components/Carousel/productCarousel';
// import CheckOut from './components/CheckOut/checkOut';
// import ProductDetails from './components/ProductDetails/productDetails';

export default class MainRoutes extends Component {
    render() {
        return (
            <div>
                <Route exact path="" component={Home} />
                <Route path="/userLogin" component={Login} />
                <Route path='/userRegister' component={SignUp}/>
                <Route path='/product' component={Product}/>
                <Route path='/checkOut' component={CheckOut}/>
                <Route path='/cart' component={Cart}/>
            </div>
        )
    }
}