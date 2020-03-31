import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridTable from '../../../components/Table/view';
//import ButtonDetail from './ButtonDetail'
import { Button, FormControl, Container, Row, Col, Form } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import data from "./Mock";
import { getPerson} from './actions';

class Admin extends Component {

    componentDidMount(){
        this.props.dispatch(getPerson());
        console.log("print props")
        console.log(this.props);
    }

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
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>Personas</h2>
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                App Views
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>Personas</strong>
                            </li>
                        </ol> 
                    </div>
                </div>
                
                <div className="border-bottom white-bg page-heading">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Document Number</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Identification Document</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Alias</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Search
                        </Button>

                    </Form>
                </div>       

                <div className="clearfix"></div>
                <React.Fragment>
                    <div className="row"><div className="col-lg-8">
                        <div className="table-responsive"></div>
                        <GridTable 
                            data={this.props.personData} 
                            columns={this.columns} 
                            // ButtonComponent={ButtonDetail} 
                        />
                    </div></div>
                </React.Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    personData: state.personReducer.personData
 
 });
 
 const mapDispatchToProps = (dispatch) => ({
     dispatch: (action) => { dispatch(action); },
 })

export default connect(mapStateToProps,mapDispatchToProps)(Admin);