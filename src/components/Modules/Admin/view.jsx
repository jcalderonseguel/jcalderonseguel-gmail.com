import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridTable from '../../../components/Table/view';
//import ButtonDetail from './ButtonDetail'
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import { getPerson} from './actions';
import columns from './columns';
import Grid from "./table";
import style from "./styles";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
          docNumber: "",
          idocType: "",
          gender: "",
          alias: "",
          email: "",
          phoneNumber: ""
        };
    }

    componentDidMount(){
        this.props.dispatch(getPerson());

    }

    searchPerson = () => {

        const { docNumber, idocType, gender, alias, email, phoneNumber} = this.state;
        this.props.dispatch(getPerson(docNumber, idocType, gender, alias, email, phoneNumber));
        
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

      }

    render() {

        const { personData } = this.props;
        const { label } = style;
        
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
                            <Form.Group as={Col}>
                                <Form.Label style={label}>Document Number</Form.Label>
                                <Form.Control type="text" 
                                                name="docNumber" 
                                                onChange={this.handleInputChange} 
                                                value={this.state.docNumber} 
                                            />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={label}>Identification Document</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="idocType"
                                    onChange={this.handleInputChange} 
                                    value={this.state.idocType}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={label}>Gender</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="gender"
                                    onChange={this.handleInputChange} 
                                    value={this.state.gender}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={label}>Alias</Form.Label>
                                <Form.Control
                                     type="text"
                                     name="alias"
                                     onChange={this.handleInputChange} 
                                     value={this.state.alias}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={label}>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    onChange={this.handleInputChange} 
                                    value={this.state.email}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={label}>Phone Number</Form.Label>
                                <Form.Control 
                                     type="text"
                                     name="phoneNumber"
                                     onChange={this.handleInputChange} 
                                     value={this.state.phoneNumber}
                                />
                            </Form.Group>

                        </Form.Row>
                        
                        {/* <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Alias</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                        </Form.Row> */}

                        <Button 
                            variant="primary" 
                            //type="submit"
                            onClick={this.searchPerson}
                        >
                            Search
                        </Button>

                    </Form>
                </div>       

                <React.Fragment>
                    <div>   
                        <Grid
                            columns={columns}
                            data={personData}
                            //ButtonComponent={ButtonDetail} 
                         />
                    </div>
                </React.Fragment>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    
   return {
    personData: state.personReducer.personData
 
 }};
 
 const mapDispatchToProps = (dispatch) => ({
     dispatch: (action) => { dispatch(action); },
 })

export default connect(mapStateToProps,mapDispatchToProps)(Admin);