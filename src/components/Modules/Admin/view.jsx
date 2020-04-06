import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form } from 'react-bootstrap';
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
                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Nro Documento</Form.Label>
                                <Form.Control type="text" 
                                                name="docNumber" 
                                                onChange={this.handleInputChange} 
                                                value={this.state.docNumber} 
                                            />
                            </Col>

                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Tipo Documento</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="idocType"
                                    onChange={this.handleInputChange} 
                                    value={this.state.idocType}
                                />
                            </Col>

                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Genero</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="gender"
                                    onChange={this.handleInputChange} 
                                    value={this.state.gender}
                                />
                            </Col>

                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Alias</Form.Label>
                                <Form.Control
                                     type="text"
                                     name="alias"
                                     onChange={this.handleInputChange} 
                                     value={this.state.alias}
                                />
                            </Col>

                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Correo</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    onChange={this.handleInputChange} 
                                    value={this.state.email}
                                />
                            </Col>

                            <Col lg={2} xs={6}>
                                <Form.Label style={label}>Número de Teléfono</Form.Label>
                                <Form.Control 
                                     type="text"
                                     name="phoneNumber"
                                     onChange={this.handleInputChange} 
                                     value={this.state.phoneNumber}
                                />
                            </Col>

                        </Form.Row>
                        
                        <Button 
                            style={{marginTop:"15px"}}
                            variant="primary" 
                            onClick={this.searchPerson}
                        >
                            Buscar
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