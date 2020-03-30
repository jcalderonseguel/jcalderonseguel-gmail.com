import React, { Component} from 'react'
import { Row, Col } from 'react-bootstrap';

class CountriesData extends Component {

    box(item, index) {
        const key = `${item.name}${new Date().getTime()}`;

        return (
               <Col key={key} lg={4}  >
                 <div className="contact-box">
                     <Row>
                            <Col sm={4} >
                                <div className="text-center">
                                <img  alt=""  className="img-circle-countries m-t-xs img-responsive" src={item.flag}></img> 
                                            <div className="m-t-xs font-bold"> {item.name}</div>
                                        </div>                   
                            </Col>
                                <Col sm ={8} >
                                    <h3><strong>{item.region}</strong></h3>
                                    <p><i className="fa fa-map-marker"></i> {item.subregion }</p>
                                </Col>
                                <div className="clearfix"></div>
                     </Row>
                 </div>
                </Col>
        )
    }

    render() {

        const {
            data,
          } = this.props;

        
        return (
           
            <div className=" wrapper wrapper-content animated fadeInRight">
                <div className="row">
                                 
                {

                        data.map((item, index) => this.box(item, index))
                }
                </div>
                
            </div>
           
           
        )
    }
}



export default CountriesData;