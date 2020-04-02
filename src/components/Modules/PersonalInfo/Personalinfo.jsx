import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Personalinfo extends React.Component{
  
  
  
  getData = (personId) => {
   return (  {
      "personId": "1fcc760a-766f-4fda-8ea0-96820ffc05e1",
      "firstName": "dfsf",
      "lastNamePrefix": "jie",
      "lastName": "Konopelski",
      "fullName": "Ricardo Zieme",
      "genderId": 2,
      "description": "Masculino",
      "personCategory": "Natural",
      "phones": [
          {
              "areaCode": "+56",
              "phoneNumber": "5491164528923",
              "extension": "Chile"
          }
      ],
      "emails": [
          {
              "emailAddres": "artour@gmail.com",
              "validated": true
          }
      ],
      "birthDate": "1978-09-02T00:00:00",
      "maritalStatus": "Soltero",
      "nationality": "Chileno(a)",
      "documents": [
          {
              "documentTypeCode": "RUN",
              "documentTypeDescription": "Numero de identificacion Chilena",
              "documentNumber": "577"
          }
      ]
  })
  };

  cel(item, index) {
    return (<Col>
        <Row>
          <Col>
          Teléfono:
          </Col>
          <Col>
          {item.areaCode + ' ' + item.phoneNumber}
          </Col>
        </Row>
      </Col>)
  };
  emails(item, index) {
    return (<Col>
        <Row>
          <Col>
          Email:
          </Col>
          <Col>
          {item.emailAddres}
          </Col>
        </Row>
      </Col>)
  };
  documents(item, index) {
    return (<Col>
        <Row>
          <Col>
          Tipo de doc.:
          </Col>
          <Col>
          {item.documentTypeCode}
          </Col>
        </Row>
        <Row>
          <Col>
          N° de doc.:
          </Col>
          <Col>
          {item.documentNumber}
          </Col>
        </Row>
      </Col>)
  };

  

  render(){

    const  {personId} = this.props.personId;
    console.log(personId)
    const data =this.getData(personId);
    console.log(data)

    return (
    <div className='contact-box'>
      <div className="text-center">
      <strong> Detalle personal</strong>
      </div>
      <Col>
        <Row>
          <Col>
          Nombre Completo:
          </Col>
          <Col>
          {data.fullName}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
          Género:
          </Col>
          <Col>
          {data.description}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
          Nacimiento:
          </Col>
          <Col>
          {data.birthDate}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
          Estado Civil:
          </Col>
          <Col>
          {data.maritalStatus}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
          Nacionalidad:
          </Col>
          <Col>
          {data.nationality}
          </Col>
        </Row>
      </Col>
      {data.phones.map((item, index) => this.cel(item, index))}
      {data.emails.map((item, index) => this.emails(item, index))}
      {data.documents.map((item, index) => this.documents(item, index))}
    </div>)
  }
}

export default Personalinfo