import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartButton from '../CartButton/cartButton';
import './header.css'



class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user !== prevState.user) {
            return {
                user: nextProps.user
            }
        }
        return null;
    }

    render() {
        const { user } = this.state;
        return (
            <div>

                {/* <!-- ****** Header Area Start ****** --> */}
                <header className="header_area">
                    {/* <!-- Top Header Area Start --> */}
                    <div className="top_header_area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-end">

                                <div className="col-12 col-lg-7">
                                    <div className="top_single_area d-flex align-items-center">
                                        {/* <!-- Logo Area --> */}
                                        <div className="top_logo">
                                            <a  ><img src="img/product/logofull.png" alt="" /></a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Top Header Area End --> */}
                    <div className="main_header_area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 d-md-flex justify-content-between">
                                    {/* <!-- Header Social Area --> */}
                                    <div className="header-social-area">
                            
                                    </div>
                                    {/* <!-- Menu Area --> */}

                                    {/* <!-- Menu Area --> */}
                                    <div className="main-menu-area">
                                        <nav className="navbar navbar-expand-lg align-items-start">

                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

                                            <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                                <ul className="navbar-nav animated" id="nav">
                                                    {/* <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> */}
                                                    <Link to='/'><li className="nav-item active"><p className="nav-link">Home</p></li></Link>

                                                    {/* <span className="karl-level">hot</span>  */}

                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    {/* <div className="header-social-area">
                                        <CartButton />
                                    </div> */}

                                    {/* INI CART */}


                                    {user ?
                                        // <div className="header-social-area">
                                        //     <CartButton />

                                            <div>
                                                <Link to='/cart'><button style={{marginRight:10}} type="button" className="btn btn-danger"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</button></Link>
                                                <Link to='/checkOut'><button type="button" className="btn btn-info">Check Out</button></Link>

                                            </div>
                                        

                                        :
                                        <div>
                                        <Link to='/userLogin'><button style={{marginRight:10}} type="button" className="btn btn-outline-info">Log In</button></Link>
                                        <Link to='/userRegister'><button  type="button" className="btn btn-outline-info">Sign Up</button></Link>
                                        </div>
                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    const user = state.user;
    return { user }
};

export default connect(mapStateToProps, {})(header);
