import { createPersonApi } from '../../../services/app';

export const CreatePerson  = (params) => () => {
    // const { data } = params;

    const data = {
        personNumber: 159,
        category: 1,
        status: 1,
        naturalPerson:{
            firstName: params.firstName,
            lastName: params.lastName,
        },
        address: {
            city: params.city,
            streetName: params.streetName
        },
        email: {
            emailAddress: params.email
        },
        phone: {
            countryIsoCode: "CHL",
            areaCode: "+56",
            phone: params.phone,
        },
        identificationDocument: {
            documentNumber: "rand",
        },
        attachment: {
            fileName: "name"
        }
    }      
            
    console.log("data a enviar=>>>", data)
    return createPersonApi(data)
            .then(response => response)
            .catch(error => error)
}

export default { CreatePerson };