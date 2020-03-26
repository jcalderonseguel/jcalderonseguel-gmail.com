import React, { Component } from 'react'
import { connect } from 'react-redux'



class TopHeader extends Component {

 

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <span className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => this.toggleNavigation(e)}><i className="fa fa-bars"></i> </span>
                        <form role="search" className="navbar-form-custom" method="post" action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Faça sua pesquisa..." className="form-control" name="top-search" id="top-search" />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader); 