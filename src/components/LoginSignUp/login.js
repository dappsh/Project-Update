import React, { Component } from 'react'
import './login.css'

class login extends Component {

    render() {
        return (
            <div className="App">
                {/* <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-5">
                    <i class="fa fa-envelope prefix grey-text"></i>
                    <input type="email" id="defaultForm-email" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
                </div>

                <div class="md-form mb-4">
                    <i class="fa fa-lock prefix grey-text"></i>
                    <input type="password" id="defaultForm-pass" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-default">Login</button>
            </div>
        </div>
    </div>
</div>

<div class="text-center">
    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch Modal Login Form</a>
</div>
            </div> */}


                <body id="LoginForm">
                    <div class="container">
                        {/* <h1 class="form-heading">login Form</h1> */}
                        <div class="login-form">
                            <div class="main-div">
                                <div class="panel">
                                    <h1>Log-in</h1>
                                    <p>Please enter your email and password</p>
                                </div>
                                <form id="Login">

                                    <div class="form-group">


                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" />

                                    </div>

                                    <div class="form-group">

                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />

                                    </div>
                                    <div class="forgot">
                                        <a href="">Sign Up Here</a>
                                    </div>
                                    <button type="submit" class="btn btn-info">Login</button>

                                </form>
                            </div>
                            {/* <p class="botto-text"> Designed by Sunil Rajput</p> */}
                        </div></div>

                </body>
            </div>
        );
    }

}

export default login;