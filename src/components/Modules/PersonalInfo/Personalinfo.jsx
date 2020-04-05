import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../../Styles/Personalinfo.css';
import phone  from '../../Images/phone.jpg';
import mail  from '../../Images/mail.png';
import docu  from '../../Images/docu.jpg';
import { getPersonById}  from '../../../redux/actions/loadPersonalinfo';
import { connect } from 'react-redux';


class Personalinfo extends React.Component{
  
  
 
  componentDidMount(){
    this.props.dispatch(getPersonById(this.props.personId.personId));
    
}
  
  cel(item, index) {
    return (<Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Teléfono {index+1}:
          </Col>
          <Col>
          {item.areaCode + ' ' + item.phoneNumber}
          </Col>
        </Row>
      </Col>)
  };
  emails(item, index) {
    return (<Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Email {index+1}:
          </Col>
          <Col>
          {item.emailAddres}
          </Col>
        </Row>
      </Col>)
  };
  documents(item, index) {
    return (
    <Col>
      <Col className='Column-Style'>
          <Row>
            <Col className='First-Column'>
            Tipo de documento:
            </Col>
            <Col>
            {item.documentTypeCode}
            </Col>
          </Row>
      </Col>
        <Col className='Column-Style'>
          <Row>
              <Col className='First-Column'>
              N° de documento:
              </Col>
              <Col>
              {item.documentNumber}
              </Col>
          </Row>
        </Col>
      </Col>)
  };

  

  render(){

    const  {personId} = this.props.personId;
    const data = this.props.personInfo;
    
    

    return (
    <div className='contact-box Personal-Info-Box text-center'>
      <div>
      <h3 className='Title-Box-Central'> Detalle personal</h3>
      </div>
      <div className='Box-Column'>
      <Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Nombre Completo:
          </Col>
          <Col>
          {data.fullName}
          </Col>
        </Row>
      </Col>
      <Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Género:
          </Col>
          <Col>
          {data.description}
          </Col>
        </Row>
      </Col>
      <Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Nacimiento:
          </Col>
          <Col>
          {data.birthDate}
          </Col>
        </Row>
      </Col>
      <Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Estado Civil:
          </Col>
          <Col>
          {data.maritalStatus}
          </Col>
        </Row>
      </Col>
      <Col className='Column-Style'>
        <Row>
          <Col className='First-Column'>
          Nacionalidad:
          </Col>
          <Col>
          {data.nationality}
          </Col>
        </Row>
      </Col>
      </div>
      <div className='Section-Boxes'>
        <Col>      
        <a className='Title-Box'> Teléfonos</a>
        <Image src={phone}  className='Icono-Title' />
        </Col>
      </div>
      {data.phones && data.phones.map((item, index) => this.cel(item, index))}
      <div className='Section-Boxes'>
        <Col>
          <a className='Title-Box'> Correos</a>
          <Image src={mail}  className='Icono-Title' />
        </Col>
      </div>
        {data.emails && data.emails.map((item, index) => this.emails(item, index))}
      <div className='Section-Boxes'>
        <Col>
          <a className='Title-Box'> Documentos</a>
          <Image src={docu}  className='Icono-Title' />
        </Col>
      </div>
      {data.documents && data.documents.map((item, index) => this.documents(item, index))}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   personInfo: state.personalinfo.personInfo

}
};


export default connect(mapStateToProps)(Personalinfo);