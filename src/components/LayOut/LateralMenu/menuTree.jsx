import React from 'react'

export default props => (
    <li>{// eslint-disable-next-line
                 <a href="#">
                    <i className={`fa fa-${props.icon}`}></i> 
                    <span className="nav-label">{props.label}</span>
                    <span className="fa arrow"></span>
                </a>
        }
        
        <ul className="nav nav-second-level collapse">
            {props.children}
        </ul>
    </li>
)