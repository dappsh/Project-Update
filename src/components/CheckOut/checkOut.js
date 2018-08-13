import React, { Component } from 'react';



class checkOut extends Component {

    constructor(props){
        super(props)
            this.state = {
                idCart:'',
                shipto: '',
                address:'',
                phone:'',
                
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    
    render() {



        return (

<div className="checkout_area section_padding_100">
    <div className="container">
        <div className="row">

            <div className="col-12 col-md-6">
                <div className="checkout_details_area mt-50 clearfix">

                    <div className="cart-page-heading">
                        <h5>Checkout</h5>
                    </div>

                    <form id="shipping">
                        <div className="row">
                          
                            <div className="col-12 mb-3">
                                <label >Name / Ship To <span>*</span></label>
                                <input type="text"  name='shipto' className="form-control mb-3"   value={this.state.shipto}
                                        onChange={this.onChange}/>
                            </div>
                            <div className="col-12 mb-3">
                                <label >Address <span>*</span></label>
                                <input type="text"  name='address' className="form-control"   value={this.state.address}
                                        onChange={this.onChange}/>
                            </div>
                            <div className="col-12 mb-3">
                                <label >Phone <span>*</span></label>
                                <input type="text"  name='phone' className="form-control"   value={this.state.phone}
                                        onChange={this.onChange}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div className="order-details-confirmation">

                    <div className="cart-page-heading">
                        <h5>Your Order</h5>
                        <p>The Details</p>
                    </div>

                    <ul className="order-details-form mb-4">
                        <li><span>Product</span> <span>Total</span></li>
                        <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                        <li><span>Subtotal</span> <span>$59.90</span></li>
                        <li><span>Shipping</span> <span>Free</span></li>
                        <li><span>Total</span> <span>$59.90</span></li>
                    </ul>


                    <a  className="btn karl-checkout-btn">Place Order</a>
                </div>
            </div>

        </div>
    </div>
</div>

   
    );
  }
}

export default checkOut;

