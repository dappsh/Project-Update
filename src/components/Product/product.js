import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeProduct } from '../../action';
import { withRouter } from 'react-router';


class product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            dataModal: {},
            qty: 1,

        }
    }

    componentDidMount() {
        { this.showAllProduct() }
        // var a = this.props.userid.userid;
        // console.log(a)

    }

    showAllProduct = () => {
        var url = `http://localhost:3210/product`;
        axios.get(url).then((x) => {
            this.setState({
                product: x.data,
            })
            this.props.storeProduct(x.data);
        })
    }

    showCatagoryCats = () => {
        var url = `http://localhost:3210/product/category/cats`;
        axios.get(url).then((x) => {
            console.log(x.data);
            this.setState({
                product: x.data

            })
        })
    }

    showCatagoryWords = () => {
        var url = `http://localhost:3210/product/category/words`;
        axios.get(url).then((x) => {
            console.log(x.data);
            this.setState({
                product: x.data

            })
        })
    }






    // VIEW FULL PRODUCT, STORE DATA PRODUCT KE REDUX
    storeProductToRedux = () => {
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

    addToCart = () => {
        var url = `http://localhost:3210/addToCart`;
        axios.post(url, {
            productname: this.refs.productname.value,
            productqty: this.state.qty,
            price: this.refs.price.value,
            userid: this.props.user.userid,
            status: "ok",
            productid: this.refs.productid.value,
            productimage: this.refs.productimage.value

        })
            .then((respon) => {
                if (respon.data == 'sukses') {
                    alert("add to cart");
                    console.log('respon data addToCart', respon.data)
                }
                console.log('respon data addToCart', respon.data)
                console.log('test user', this.props.user.userid)
            })

        // console.log('test user', this.props.user.userid)
    }

    render() {
        const { dataModal, qty } = this.state;
        console.log('data product redux', this.props.productDetail);

        return (

            <div>

                {/* <!-- MATERI JUMBOTRON --> */}
                <div className="jumbotron" style={{ height: '175px', backgroundColor: "#f5d568", color: "#ffffff", padding: "20px" }}>
                    <div className="container">
                        <h1><span style={{ color: "#ffffff" }}>{this.props.greet}</span></h1>
                        <p>What Are You Looking For? </p>
                        {/* <form className="navbar-form" role="search"> */}
                            <div className="input-group w-25">
                                <input type="text" className="form-control" placeholder="Search" name="q" />
                                <div className="input-group-btn">
                                    <button className="btn btn-outline-info" type="submit"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        {/* </form> */}
                    </div>
                </div>

                <div className="karl-projects-menu">
                    <div className="text-center portfolio-menu">
                        <button className="btn active" data-filter="*"><h1>OUR PRODUCTS</h1></button>
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
                                                    {/* <button type="button" className="btn btn-outline-info" onClick={() => this.storeProductToRedux()}>View Full Product Details</button> */}
                                                </div>
                                                {/* <!-- Add to Cart Form --> */}
                                                {/* <form className="cart" method="post"> */}
                                                <div className="quantity">
                                                    <button className="qty-minus"><i className="fa fa-minus" aria-hidden="true" onClick={() => this.minQty()}></i></button>
                                                    {/* onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false; */}

                                                    <input type="number" className="qty-text" id="qty" name="quantity" value={qty} onChange={(e) => this.setState({ qty: e.target.value })} />

                                                    <button className="qty-plus" ><i className="fa fa-plus" aria-hidden="true" onClick={() => this.addQty()}></i></button>

                                                    {/* AMBIL NILAI UNTUK CART */}
                                                    <input type="hidden" ref="productid" value={dataModal.productid} />
                                                    <input type="hidden" ref="productimage" value={dataModal.productimage} />
                                                    <input type="hidden" ref="productname" value={dataModal.productname} />
                                                    <input type="hidden" ref="price" value={dataModal.price} />
                                                    <input type="hidden" value="" />


                                                    <button type="submit" className="cart-submit" onClick={() => { this.addToCart() }}>Add to cart</button>
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

                                    <div className="widget catagory mb-50">
                                        {/* <!--  Side Nav  --> */}
                                        <div className="nav-side-menu">
                                            <h6 className="mb-0">Catagories</h6>
                                            <div className="menu-list">
                                                <ul id="menu-content2" className="menu-content collapse out">
                                                    {/* <!-- Single Item --> */}
                                                    <li onClick={() => { this.showAllProduct() }} >
                                                        <a>ALL MUGS</a>
                                                    </li>
                                                    <li onClick={() => this.showCatagoryCats()}>
                                                        <a>CATS MUG</a>
                                                    </li>
                                                    <li onClick={() => { this.showCatagoryWords() }} >
                                                        <a>WORDS MUG</a>
                                                    </li>

                                                </ul>
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


const mapStateToProps = (state) => {
    const productDetail = state.productDetail;
    const user = state.user
    const greet = state.greetRed
    return { productDetail, user, greet }
};

export default withRouter(connect(mapStateToProps, { storeProduct })(product));
