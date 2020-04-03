import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../../Styles/Personalinfo.css';
import phone  from '../../Images/phone.jpg'
import mail  from '../../Images/mail.png'
import docu  from '../../Images/docu.jpg'

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
              "areaCode": "+156",
              "phoneNumber": "5491164528923",
              "extension": "Chile"
          },
          {
            "areaCode": "+256",
            "phoneNumber": "5491164528923",
            "extension": "Chile"
          },
          {
            "areaCode": "+356",
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
                    },
                    {
                      "documentTypeCode": "RUN",
                      "documentTypeDescription": "Numero de identificacion Chilena",
                      "documentNumber": "577"
                    },
                    {
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    },
                    {
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    },{
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    },
                    {
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    },
                    {
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    },
                    {
                    "documentTypeCode": "RUN",
                    "documentTypeDescription": "Numero de identificacion Chilena",
                    "documentNumber": "577"
                    }
      ]
  })
  };

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
    console.log(personId)
    const data =this.getData(personId);
    console.log(data)

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
      {data.phones.map((item, index) => this.cel(item, index))}
      <div className='Section-Boxes'>
        <Col>
          <a className='Title-Box'> Correos</a>
          <Image src={mail}  className='Icono-Title' />
        </Col>
      </div>
        {data.emails.map((item, index) => this.emails(item, index))}
      <div className='Section-Boxes'>
        <Col>
          <a className='Title-Box'> Documentos</a>
          <Image src={docu}  className='Icono-Title' />
        </Col>
      </div>
      {data.documents.map((item, index) => this.documents(item, index))}
    </div>)
  }
}

export default Personalinfo