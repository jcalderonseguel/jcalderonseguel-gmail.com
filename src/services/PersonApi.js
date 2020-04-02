import axios from "axios";
const GetPerson = (
  email,
  phoneNumber,
  identificationDocumentTypeId,
  documentNumber,
  genderId,
  alias
) => {
  let email = email;
  let phoneNumber = phoneNumber;
  let identificationDocumentTypeId = identificationDocumentTypeId;
  let documentNumber = documentNumber;
  let genderId = genderId;
  let alias = alias;
  axios
    .get("http://localhost:5000/v1/persons", {
      headers: {
        Authorization: `Bearer ${token}`
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
    .post(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .get("http://localhost:5000/v1/persons/`${id}`")
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
