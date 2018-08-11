import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
// login ID adalah nama function di index.js pada file action
import { userLogin } from '../../action'
//import nama functioan yang di buat di index.js pada reducers
// import loginId di bawah (export default)
class login extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        const { user } = this.props;
        if (user) {
            this.props.history.push('/');
        }
    }

    klikLogin(a) {
        var url = 'http://localhost:3210/login'
        axios.post(url, {
            username: a.email.value,
            password: a.password.value
        })
            .then((respon) => {
                if (respon && respon.data && respon.data.length > 0) {
                    const data = respon.data[0];
                    console.log('data bosqu', data);
                    this.props.userLogin(data);
                    this.props.history.push('/');
                } else {
                    alert('gagal masuk bossque');
                }
            })

    }

    componentDidUpdate() {
        console.log('propsdidUpdate', this.props)
    }

    render() {
        console.log('props login', this.props);
        return (
            <body id="LoginForm">
                <div className="container">
                    {/* <h1 className="form-heading">login Form</h1> */}
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h1>Log-in</h1>
                                <p>Please enter your email and password</p>
                            </div>
                            {/* <form id="Login"> */}

                            <div className="form-group">


                                <input type="email" className="form-control" ref="email" placeholder="Email Address" />

                            </div>

                            <div className="form-group">

                                <input type="password" className="form-control" ref="password" placeholder="Password" />

                            </div>
                            <div className="forgot">
                                <Link to='/userRegister'>Sign Up Here</Link>
                            </div>
                            <button type="submit" onClick={() => { this.klikLogin(this.refs) }} className="btn btn-info">Login</button>

                            {/* </form> */}
                        </div>
                    </div>
                </div>

            </body>
        );
    }

}
const mapStateToProps = (state) => {
    const user = state.user;
    return { user }
};

export default connect(mapStateToProps, { userLogin })(login);

// export default login;