import axios from "axios";
const GetPerson = (
  email,
  phoneNumber,
  identificationDocumentTypeId,
  documentNumber,
  genderId,
  alias
) => {
  axios
    .get("http://localhost:5000/v1/persons", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        email: email,
        phoneNumber: phoneNumber,
        identificationDocumentTypeId: identificationDocumentTypeId,
        documentNumber: documentNumber,
        genderId: genderId,
        alias: alias
      }
    })
    .then(res => {
      const personData = res.data;
      console.log(personData);
      this.setState({ personData });
    })
    .catch(err => {
      console.log(err);
    });

  return { personData };
};

const GetPersonById = id => {
  let id = id;
  let typeOfView = "full";
  axios
    .get("http://localhost:5000/v1/persons/`${id}`", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        typeOfView: typeOfView
      }
    })
    .then(res => {
      const personData = res.data;
      console.log(personData);
      this.setState({ personData });
    })
    .catch(err => {
      console.log(err);
    });

  return { personData };
};

export default GetPerson;
GetPersonById;
