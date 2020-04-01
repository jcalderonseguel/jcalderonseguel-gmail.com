import Dashboard from "../components/Modules/Dashboard";
import Form from "../components/Modules/NewPerson/form";
import PersonInfoStep from "../components/Modules/NewPerson/Steps/PersonInfoStep";
import AddressInfoStep from "../components/Modules/NewPerson/Steps/AddressInfoStep";
// import WarningStep from "../components/Modules/NewPerson/Steps/WarningStep";
import FinishStep from "../components/Modules/NewPerson/Steps/FinishStep";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  person: "/new-person",
  personInfo: "/person",
  address: "/address",
  // warning: "/warning",
  finish: "/finish",
  apiCountries:"/ApiCountriesSample",
};

const routes = [
  { path: paths.root, component: Dashboard },
  { path: paths.home, component: Dashboard },
  { path: paths.person, component: Form },
  { path: paths.address, component: AddressInfoStep },
  { path: paths.personInfo, component: PersonInfoStep },
  // { path: paths.warning, component: WarningStep },
  { path: paths.finish, component: FinishStep },


  { path: paths.apiCountries, component: ApiCountries},
];

export default routes;
