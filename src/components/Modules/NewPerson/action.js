import { createPersonApi } from "../../../services/app";

export const CreatePerson = params => {
  const data = {
    personNumber: 160,
    category: 1,
    status: 1,
    naturalPerson: {
      firstName: params.firstName,
      lastName: params.lastName
    },
    address: {
      city: 1,
      streetName: params.streetName
    },
    email: {
      emailAddress: params.email
    },
    phone: {
      countryIsoCode: "CHL",
      areaCode: "+56",
      phone: params.phone
    },
    identificationDocument: {
      documentNumber: "rand"
    },
    attachment: {
      fileName: "name"
    }
  };
  return createPersonApi(data)
    .then(res => res)
    .catch(err => console.log(err));
};

export const nextStepActions = step => ({
  type: "nextStep",
  step
});

export default { CreatePerson };
