import React, { Component} from 'react'
import {  connect } from "react-redux"




class CreateUser extends Component {

 
    render() {
        return (
            <div>
                     <div className="middle-box text-center loginscreen   animated fadeInDown">
                         <div>
                                <h1 className="logo-name">IN+</h1>
                        </div>
                        <h3>Register to IN+</h3>
                        {/* <p>Create account to see it in action.</p>
                        <div className="form-group">
                                   <input type="text" className="form-control" placeholder="Name"></input>
                        </div>
                        <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                           </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                                <div className="checkbox i-checks"> <input type="checkbox"> Agree the terms and policy </input>
                                </div>
                        </div>
                            <button type="submit" className="btn btn-primary block full-width m-b">Register</button> */}

                     </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   

});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);