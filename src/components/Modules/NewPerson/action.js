import { createPersonApi } from "../../../services/app";
import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    setLoading: ["loading"],
    setOpenModalSuccess: ["open"]
  },
  {
    prefix: "CREATE_PERSON"
  }
);
const { setLoading, setOpenModalSuccess } = Creators;

const { SET_LOADING, SET_OPEN_MODAL_SUCCESS } = Types;

const CreatePerson = params => async dispatch => {
  dispatch(setLoading(true));
  const data = {
    category: "1",
    status: 1,
    naturalPerson: {
      firstName: params.firstName,
      lastNamePrefix: "jie",
      lastName: params.lastName,
      fullName: "Ricardo",
      birthDate: "1978-09-02",
      dateOfDeath: "2028-04-21",
      maritalStatus: 1,
      nationality: "CHL",
      gender: 1
    },
    address: [
      {
        city: parseInt(params.city),
        postCode: "87634",
        streetName: params.streetName,
        buildingNumber: "Lagash",
        addressLine: "Lagash",
        latitude: 1.4,
        longitude: 1.4,
        addressType: 1,
        POSTOFFICEBOXCODE: "Correos",
        poBoxPostalCode: "100",
        statusCodeAddress: 0,
        coname: "Correo",
        validFrom: "2019-01-01",
        validTo: "2019-09-01"
      }
    ],
    attachment: [
      {
        fileName: "Hello",
        notes: "Hello",
        attachmentType: 1,
        ownerKey: "Hello",
        fileSize: 10,
        name: "Hello",
        encodedKey: "Hello",
        location: "Hello"
      }
    ],
    email: [
      {
        emailAddress: params.email,
        validated: true,
        validFrom: "2019-03-07",
        validTo: "2025-09-24"
      }
    ],
    identificationDocument: [
      {
        documentNumber: Math.floor(Math.random() * 1000),
        issuingDate: "2019-09-21",
        issuingAuthority: "allow",
        expiryDate: "2019-12-31",
        validFrom: "2019-01-01",
        validTo: "2019-12-31",
        personNumber: 20,
        identificationDocumentType: 1
      }
    ],
    income: [
      {
        value: 1.1,
        currency: "CLP",
        company: "Lagash",
        periodicity: 0,
        validFrom: "2019-01-02",
        validTo: "2019-09-21"
      }
    ],
    phone: [
      {
        countryIsoCode: "CHL",
        areaCode: "+56",
        phoneNumber: params.phone,
        extension: "Chile",
        phoneType: 1,
        validFrom: "2019-01-01",
        validTo: "2024-12-31"
      }
    ],
    rol: [
      {
        roleType: 1,
        validFrom: "2023-01-01",
        validTo: "2023-01-01"
      }
    ]
  };
  const response = await createPersonApi(data);
  //Modal
  if (response && response.status === 200) {
    dispatch(setOpenModalSuccess(true));
    console.log("Response", response);
  } else {
    //dispatch(setOpenModalError(true));
  }
  dispatch(setLoading(false));
};

export {
  Types,
  SET_LOADING,
  setLoading,
  CreatePerson,
  setOpenModalSuccess,
  SET_OPEN_MODAL_SUCCESS
};
export default Creators;
