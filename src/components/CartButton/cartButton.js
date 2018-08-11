import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class cart extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { id: 1, namaProduct: 'Gelas Kucing', desc: 'Lorem', harga: 321321 }
            ]
        }
    }


    render() {
        return (
            <div className="cart">

                <a id="header-cart-btn" target="_blank"><span className="cart_quantity">2</span> <i className="ti-bag"></i> Your Bag $20</a>
                {/* <!-- Cart List Area Start --> */}
                <ul className="cart-list">
                    <li>
                        <a className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt="" /></a>
                        <div className="cart-item-desc">
                            <h6><a  >Women's Fashion</a></h6>
                            <p>1x - <span className="price">$10</span></p>
                        </div>
                        <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                    </li>
                    <li>
                        <a className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt="" /></a>
                        <div className="cart-item-desc">
                            <h6><a  >Women's Fashion</a></h6>
                            <p>1x - <span className="price">$10</span></p>
                        </div>
                        <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                    </li>
                    <li className="total">
                        <span className="pull-right">Total: $20.00</span>
                        <Link to='/cart'> <button className="btn btn-sm btn-cart">Cart</button></Link>
                        <Link to='/checkOut'><button className="btn btn-sm btn-checkout">Checkout</button></Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default cart