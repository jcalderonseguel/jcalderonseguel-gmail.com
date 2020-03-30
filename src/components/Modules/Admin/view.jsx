import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import GridTable from '../../../components/Table/view';
import { Button } from '@material-ui/core';
//import ButtonDetail from './ButtonDetail'

class Admin extends Component {

    data = [
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Ruso",
        },
        {
            name:"Artur",
            lastName:"Garaev",
            dateOfBirth:"01-05-1978",
            maritalStatus:"Soltero",
            nationality: "Rusode",
        },
    ];

    columns = [

        {
            width: 200,
            label: 'Name',
            dataKey: 'name',
        },
        {
            width: 200,
            label: 'Last Name',
            dataKey: 'lastName',
            //numeric: true,
        },
        {
            width: 200,
            label: 'Date of Birth',
            dataKey: 'dateOfBirth',
            //numeric: true,
        },
        {
            width: 200,
            label: 'Marital Status',
            dataKey: 'maritalStatus',
            //numeric: true,
        },
        {
            width: 120,
            label: 'Natiionality',
            dataKey: 'nationality',
            //numeric: true,
        },
    ]

    render() {
        
        
        return (
            <div>
                <h1>Personas</h1>
                
                <div className="col-lg-8">
                    <div className="table-responsive"></div>
                    <GridTable 
                        data={this.data} 
                        columns={this.columns} 
                        // ButtonComponent={ButtonDetail} 
                    />
                </div>
            </div>
        )
    }
}

export default Admin; 