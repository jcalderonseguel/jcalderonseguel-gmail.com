import React, { Component} from 'react'
import {  connect } from "react-redux"
import DataCountries from "./CountriesData"

import { getCountries } from './actions';

class ApiCountries extends Component {

    //Lamar a api, cuando ingresa
    componentDidMount(){
        this.props.dispatch(getCountries());
    }
  
    render() {
        return (
            <div>
                 
                  <div className="row wrapper border-bottom white-bg page-heading">
                        <div className="col-lg-9">
                            <h2>Countries Api</h2>
                             <ol className="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    App Views
                                </li>
                                <li className="active">
                                    <strong>Contacts</strong>
                                </li>
                            </ol> 
                        </div>
                    </div>
                       {this.props.countriesData && this.props.countriesData.length > 0 &&
                          <React.Fragment>
                             
                                    <DataCountries data={this.props.countriesData}/>
                            
                         </React.Fragment>
                        }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   countriesData: state.countriesReducer.countriesData

});

const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
})

export default connect(mapStateToProps,mapDispatchToProps)(ApiCountries);