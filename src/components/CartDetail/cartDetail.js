import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../node_modules/axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCart: [],
        }
    }

    componentDidMount() {
        { this.Carts() }
    }
    Carts() {
        var url = `http://localhost:3210/getItemCart/${this.props.user.userid}`;
        axios.get(url).then((a) => {

            this.setState({
                dataCart: a.data
                // length: a.data
            })
            console.log('id user masuk cart : ', this.props.user.userid)
        })
    }


    deleteCart(id) {
        var url = `http://localhost:3210/getCartDelete`
        axios.post(url, {
            idcart: id

        })
            .then((respon) => {
                { this.Carts() }
            })
    }

    minusQtyCart(idx, jumlahx) {
        if(jumlahx > 1){
        var jumlah = jumlahx - 1
        var url = `http://localhost:3210/getCartMinus`
        axios.post(url, {
            idcart: idx,
            productqty: jumlah,
        })
            .then((respon) => {
                { this.Carts() }
            })
        }
    }

    plusQtyCart(idx, jumlahx) {
        console.log('ini stock: ', this.state.stock)
        var jumlah = jumlahx + 1
        var url = `http://localhost:3210/getCartMinus`
        axios.post(url, {
            idcart: idx,
            productqty: jumlah,
        })
            .then((respon) => {
                { this.Carts() }
            })
    }




    render() {

        const mapingCart = this.state.dataCart.map((data, key) => {
            var idCart = data.idcart;
            var productName = data.productname;
            var productQty = data.productqty;
            var price = data.price;
            var productImage = data.productimage;
            var subtotal = productQty*price;
            

            // console.log(`ini data Cart : `, data)
            console.log('data', 'idCart : ', idCart, 'nama produk : ', productName, 'jumlah : ', productQty, 'harga : ', price, 'link imagae : ', productImage)

            // START RETURN
            return (
                <tr>
                    <td key={key} className="cart_product_img d-flex align-items-center">
                        <a ><img src={productImage} alt="Product" /></a>
                        <h6>{productName}</h6>
                    </td>
                    <td className="price"><span>{price}</span></td>
                    <td className="qty">
                        <div className="quantity">
                            <i class="fa fa-minus" aria-hidden="true" onClick={() => { this.minusQtyCart(idCart, productQty) }}></i>
                            <input type="number" className="qty-text" id="qty" name="quantity" value={productQty} />
                            <i class="fa fa-plus" aria-hidden="true" onClick={() => { this.plusQtyCart(idCart, productQty) }}></i>
                        </div>
                    </td>
                    <td className="total_price"><button className="btn btn-outline-danger" onClick={() => { this.deleteCart(idCart) }}><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                    <td className="price"><span>{subtotal}</span></td>
                </tr>

            )
            // END RETURN
        })



        return (
            <div>


                {/* <!-- ****** Cart Area Start ****** --> */}
                <div className="cart_area section_padding_100 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-table clearfix">
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                                <th>Sub Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {/* MAPING HERE  */}
                                            {mapingCart}

                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-footer d-flex mt-30 justify-content-between">
                                    <div className="back-to-shop w-50">
                                        <Link to='/product'>Continue shooping</Link>
                                    </div>
                                    <div className="w-25 text-right">
                                    <Link to="/checkout"><a  style={{color: 'white'}} className="btn karl-checkout-btn">Proceed to checkout</a></Link> 
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- ****** Cart Area End ****** --> */}

                {console.log('test id usersssssssssssssssssss', this.props.user.userid)}
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    // function reduxnya  storeProduct
    const productDetail = state.productDetail;
    const user = state.user
    // function reduxnya userLogin
    return { productDetail, user }
};

export default withRouter(connect(mapStateToProps, {})(cart));

