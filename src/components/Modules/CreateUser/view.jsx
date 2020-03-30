import React, { Component} from 'react'
import {  connect } from "react-redux"



import 'jquery';
import 'metismenu';
import 'bootstrap';

class CreateUser extends Component {

  
      
    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>Create User</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                App Views
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>CreateUser</strong>
                            </li>
                        </ol>
                    </div> 
                </div>
                <div className="middle-box text-center loginscreen   animated fadeInDown">
                    <h1 className="logo-name">IN+</h1>
                    <h3>Register to IN+</h3>
                    <p>Create account to see it in action.</p>

                    <form class="m-t" role="form" action="login.html">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" required=""/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" required=""/>
                    </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required=""/>
                </div>
                
                <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

                <p class="text-muted text-center"><small>Already have an account?</small></p>
                
                    </form> 
                </div>
            </div>
            
        )
    }
}



export default (CreateUser);