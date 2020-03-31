import Dashboard from "../components/Modules/Dashboard";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";
import CreateUser from "../components/Access/CreateUser/view";
export const paths = {
  any: "*",
  root: "/",
  apiCountries:"/ApiCountriesSample",
  createUser: "/CreateUser"
};

const routes = [
    { path: paths.root, component: Dashboard },
    { path: paths.apiCountries, component: ApiCountries},
    { path: paths.createUser, component: CreateUser}
  
];

export default routes;
