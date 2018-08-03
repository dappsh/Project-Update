import React, {Component} from 'react';

class template extends Component{
    render(){
        return(
            <div>
              <div class="main-menu-area">
                                    <nav class="navbar navbar-expand-lg align-items-start">
    
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="ti-menu"></i></span></button>
    
                                        <div class="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                            <ul class="navbar-nav animated" id="nav">
                                                <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="#" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                    <div class="dropdown-menu" aria-labelledby="karlDropdown">
                                                        <a class="dropdown-item" href="index.html">Home</a>
                                                        <a class="dropdown-item" href="shop.html">Shop</a>
                                                        <a class="dropdown-item" href="product-details.html">Product Details</a>
                                                        <a class="dropdown-item" href="cart.html">Cart</a>
                                                        <a class="dropdown-item" href="checkout.html">Checkout</a>
                                                    </div>
                                                </li>
                                                <li class="nav-item"><a class="nav-link" href="#">Dresses</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#"><span class="karl-level">hot</span> Shoes</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
        </div>
        )
    }
}

export default template