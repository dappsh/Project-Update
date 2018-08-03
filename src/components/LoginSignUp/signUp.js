import React, { Component } from 'react'
import './signUp.css'

class signUp extends Component {

    render() {
        return (
            <div className="App">
                {/* <div class="modal fade" id="modalsignUpForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                <button class="btn btn-default">signUp</button>
            </div>
        </div>
    </div>
</div>

<div class="text-center">
    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalsignUpForm">Launch Modal signUp Form</a>
</div>
            </div> */}


                <div id="signUpForm">
                    <div class="container">
                        {/* <h1 class="form-heading">signUp Form</h1> */}
                        <div class="signUp-form">
                            <div class="main-div">
                                <div class="panel">
                                    <h1>Sign-Up</h1>
                                    {/* <p>Please enter your email and password</p> */}
                                </div>
                                <form id="signUp">

                                    <div class="form-group">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Username" />
                                    </div>

                                    
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" />
                                    </div>

                                    <div class="form-group">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                    </div>


                                    {/* <div class="forgot">
                                        <a href="reset.html">Forgot password?</a>
                                    </div> */}
                                    <button type="submit" class="btn btn-info">Sign Up</button>

                                </form>
                            </div>
                            {/* <p class="botto-text"> Designed by Sunil Rajput</p> */}
                        </div></div>

                </div>
            </div>
        );
    }

}

export default signUp;