import axios from "axios";

const loginApi = async () =>
   axios.post("http://localhost:5001/v1/persons/login",
    {
      email:"admin@site.com",
      password:"1234"
    }
  ).catch(err => {
      console.log(err);
    });

const GetPersonApi = async (
  documentNumber,
  identificationDocumentTypeId,
  genderId,
  alias,
  email,
  phoneNumber,
) => {

  const response = await loginApi();
  const token = response.data.token;

  return axios
    .get("http://localhost:5001/v1/persons", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        email,
        phoneNumber,
        identificationDocumentTypeId,
        documentNumber,
        genderId,
        alias
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

const GetPersonByIdApi = async id => {

  const response = await loginApi();
  const token = response.data.token;

  return axios
    .get(`http://localhost:5001/v1/persons/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        typeOfView: "full"
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export { GetPersonApi, GetPersonByIdApi };
