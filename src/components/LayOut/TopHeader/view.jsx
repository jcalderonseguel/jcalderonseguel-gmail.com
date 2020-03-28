import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    setCloseOpenMenu

} from "../../Global/actions"


class TopHeader extends Component {

 
    toggleNavigation =() => {
       this.props.dispatch(setCloseOpenMenu(!this.props.isOpenLateral))
    }
   
    hideShowMenu = () => {
                 
        this.props.isOpenLateral===true ? document.body.classList.add("mini-navbar") :document.body.classList.remove("mini-navbar")
    }
    render() {
        this.hideShowMenu();
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <span className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={this.toggleNavigation}><i className="fa fa-bars"></i> </span>
                        <form role="search" className="navbar-form-custom" method="post" action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Busqueda" className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <span>
                                <i className="fa fa-sign-out"></i> Exit
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenLateral: state.global.isOpenLateral
});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader); 