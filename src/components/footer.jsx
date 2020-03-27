import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="text-center m-t-lg">
                        {// eslint-disable-next-line
                        <a href="http://cargobill-001-site3.ctempurl.com/src/"   target="_blank">
                            <i className={`fa fa-laptop`}></i> 
                            <span className="nav-label">Demo</span>
                            <span className="fa fa-arrow"></span>
                          
                        </a>
                         }
                  
                </div>
                <div>
                    <strong>Copyright</strong> Example Company &copy; 2015-2020
                     
                 
                </div>
            </div>
        )
    }
}