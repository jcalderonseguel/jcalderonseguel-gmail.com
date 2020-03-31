import React, { Component } from 'react'
import { connect } from 'react-redux'

import Drawer from './DrawerPerson/Drawer'


class Dashboard extends Component {


    render() {
        return (
            <div>
                {/* <Header title="Dashboard">
                    <Link to="/home" className="btn btn-warning btn-sm">Voltar</Link>
                </Header> */}
                <div className="wrapper wrapper-content animated bounceIn">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <h1>
                                    Página dashboard
                                </h1>
                              
                                <small>
                                   Hello world
                                
                                <Drawer/>
                                </small>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 