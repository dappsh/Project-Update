import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class product extends Component {

    constructor() {
        super();
        this.state = {
            product: [],
            dataModal: {},
            qty: 1,
        }
    }



    componentDidMount() {
        var url = `http://localhost:3210/product`;
        axios.get(url).then((x) => {
            console.log(x.data);
            this.setState({
                product: x.data

            })
        })
    }

    addQty = () => {
        console.log('add')
        this.setState({
            qty: this.state.qty + 1
        })
    }
    minQty = () => {
        if (this.state.qty > 0) {
            this.setState({
                qty: this.state.qty - 1

            })

        }
    }


    render() {
        const { dataModal, qty } = this.state;

        return (

            <div>

                {/* <!-- MATERI JUMBOTRON --> */}
                <div className="jumbotron" style={{ height: '200px', backgroundColor: "#f5d568", color: "#ffffff", padding: "20px" }}>
                    <div className="container">
                        <h1><span style={{ color: "#ffffff" }}>CATS COFFEE MUGS</span></h1>
                        <p>Who doesn't love a cute cat pattern?</p>
                        <div className="header-social-area">
                            <div>
                                <Link to='/userLogin'><button style={{backgroundColor: '#34ABBA'}} type="button" className="btn btn-info">Log In</button></Link>
                                <Link to='/userRegister'><button style={{backgroundColor: '#34ABBA'}}  type="button" className="btn btn-info">Sign Up</button></Link>

                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- ****** Quick View Modal Area Start ****** --> */}
                <div className="modal fade" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div className="modal-body">
                                <div className="quickview_body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-lg-5">
                                                <div className="quickview_pro_img">
                                                    <img src={dataModal.productimage} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <div className="quickview_pro_des">
                                                    <h4 className="title">{dataModal.productname}</h4>

                                                    <h5 className="price">Rp {dataModal.price}</h5>
                                                    <p>{dataModal.description}</p>
                                                    <a  >View Full Product Details</a>
                                                </div>
                                                {/* <!-- Add to Cart Form --> */}
                                                {/* <form className="cart" method="post"> */}
                                                <div className="quantity">
                                                    <button className="qty-minus"><i className="fa fa-minus" aria-hidden="true" onClick={() => this.minQty()}></i></button>
                                                    {/* onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false; */}

                                                    <input type="number" className="qty-text" id="qty" name="quantity" value={qty} onChange={(e) => this.setState({ qty: e.target.value })} />

                                                    <button className="qty-plus" ><i className="fa fa-plus" aria-hidden="true" onClick={() => this.addQty()}></i></button>

                                                    <button type="submit" name="addtocart" value="5" className="cart-submit">Add to cart</button>
                                                    {/* onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;" */}
                                                </div>

                                                {/* </form> */}

                                                <div className="share_wf mt-30">

                                                    <a  ><img src="img/product/logofull.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop_grid_area" style={{ padding: '20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop_sidebar_area">

                                    {/* <div className="widget catagory mb-50"> */}
                                    {/* <!--  Side Nav  -->
                                <div className="nav-side-menu">
                                    <h6 className="mb-0">Catagories</h6>
                                    <div className="menu-list">
                                        <ul id="menu-content2" className="menu-content collapse out"> */}
                                    {/* <!-- Single Item --> */}
                                    {/* <li data-toggle="collapse" data-target="#women2">
                                                <a  >Woman wear</a>
                                                <ul className="sub-menu collapse show" id="women2">
                                                    <li><a  >Midi Dresses</a></li>
                                                    <li><a  >Maxi Dresses</a></li>
                                                    <li><a  >Prom Dresses</a></li>
                                                    <li><a  >Little Black Dresses</a></li>
                                                    <li><a  >Mini Dresses</a></li>
                                                </ul>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                                    <div className="widget recommended">
                                        <h6 className="widget-title mb-30">Recommended</h6>

                                        <div className="widget-desc">
                                            {/* <!-- Single Recommended Product --> */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/p1a.jpg" alt="" />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Men’s T-shirt</h6>
                                                    <p>Rp  39.99</p>
                                                </div>
                                            </div>
                                            {/* <!-- Single Recommended Product --> */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/p2a.jpg" alt="" />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Blue mini top</h6>
                                                    <p>Rp  19.99</p>
                                                </div>
                                            </div>
                                            {/* <!-- Single Recommended Product --> */}
                                            <div className="single-recommended-product d-flex">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/p3a.jpg" alt="" />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Women’s T-shirt</h6>
                                                    <p>Rp  39.99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">
                                    <div className="row">
                                        {console.log('haloooooo')}

                                        {this.state.product.map((data, key) => {
                                            console.log('data', data);
                                            return (
                                                <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s" key={key}>
                                                    {/* <!-- Product Image --> */}
                                                    <div className="product-img">
                                                        <img src={data.productimage} alt="" />
                                                        <div className="product-quicview">
                                                            <a data-toggle="modal" onClick={() => this.setState({ dataModal: data })} data-target="#quickview"><i className="ti-plus"></i></a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Product Description --> */}
                                                    <div className="product-description">
                                                        <h4 className="product-price">Rp {data.price}</h4>
                                                        <p>{data.productname}</p>
                                                        {/* <!-- Add to Cart --> */}
                                                        <a className="add-to-cart-btn">ADD TO CART</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }





                                    </div>
                                </div>

                                {/* <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active"><a className="page-link"  >01</a></li>
                                    <li className="page-item"><a className="page-link"  >02</a></li>
                                    <li className="page-item"><a className="page-link"  >03</a></li>
                                </ul>
                            </nav>
                        </div> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default product