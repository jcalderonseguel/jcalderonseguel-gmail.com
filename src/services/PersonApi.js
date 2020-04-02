import axios from "axios";
const GetPerson = () => {
  axios
    .post(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .get("http://localhost:5000/v1/persons")
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
