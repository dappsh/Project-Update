import React, { Component } from 'react'
import './signUp.css'
import axios from 'axios'


class register extends Component {
    // create component state
    constructor(props){
        // run super
        super(props);
        this.state = {
     
            username : '',
            email: '',
            password:'',
            fullname:''
            // phone :'',
            // errors:{
            // }
        }
        
        this.onChange = this.onChange.bind(this)
        // atau bisa langsung inline pada onChange ={this.onChange.bind(this)}

    }
   

    // mengambil nilai berdasarkan name, setelah ini bind this pada this.setState
    // jika tidak di bind this tidak di kenali
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    // Function klik singUp, posting dan redirect ke halaman login
    KlikSignUp(){
        // posting user baru
        const newUser = {
            fullname:this.state.fullname,
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
        }
        // console.log(newUser)
        var url = `http://localhost:3210/SignUp`
        axios.post(url, newUser)
            .then(res => console.log(res.data))
        }
    



    render() {

        // buat function onchange, setiap user ketik akan merubah state 
       
        return (
            <div>
                  <div id='signUpForm'>
                    <div className='container'>
                        {/* <h1 className='form-heading'>signUp Form</h1> */}
                        <div className='signUp-form'>
                            <div className='main-div'>
                                <div className='panel'>
                                    <h1>Sign-Up</h1>
                                    {/* <p>Please enter your email and password</p> */}
                                </div>
                                <form id='signUp'>
                                 {/* name user */}
                                 <div className='form-group'>
                                        <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Full Name'
                                        name='fullname'
                                        value={this.state.fullname}
                                        onChange={this.onChange}
                                        />
                                    </div>

                                {/* name user */}
                                    <div className='form-group'>
                                        <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Username'
                                        name='username'
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        />
                                    </div>

                                {/* email user */}
                                    <div className='form-group'>
                                        <input 
                                         type='email'
                                         className='form-control'
                                         placeholder='Email Address' 
                                         name='email'
                                         value={this.state.email}
                                         onChange={this.onChange}
                                         />
                                    </div>
                                {/* password user */}
                                    <div className='form-group'>
                                        <input 
                                         type='password'
                                         className='form-control'
                                         placeholder='Password' 
                                         name='password'
                                         value={this.state.password}
                                         onChange={this.onChange}
                                         />
                                    </div>

                                        {/* <div className='form-group'>
                                        <input 
                                         type='password'
                                         className='form-control'
                                         placeholder='Confirm Password'
                                         name='password2' 
                                         value={this.state.password2}
                                         onChange={this.onChange}
                                         />
                                    </div>
                                 */}
                                

                                    {/* menjalankan function signUp */}
                                    <button type='button' 
                                    className='btn btn-info' 
                                    onClick={()=>{this.KlikSignUp()}}>
                                    Sign Up</button>

                                </form>
                            </div>
                            {/* <p className='botto-text'> Designed by Sunil Rajput</p> */}
                        </div></div>

                </div>
            </div>
        );
    }

}

export default register;

// saat input diberikan value  state, input tidak bisa di ketik, maka diberikan function onchange