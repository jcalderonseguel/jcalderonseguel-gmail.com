import Dashboard from "../components/Modules/Dashboard";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";
import CreateUser from "../components/Access/CreateUser/view";
import GetPerson from "../components/Modules/GetPerson/view";
export const paths = {
  any: "*",
  root: "/",
  apiCountries: "/ApiCountriesSample",
  createUser: "/CreateUser",
  placeholder: "/Placeholder"
};

const routes = [
  { path: paths.root, component: Dashboard },
  { path: paths.apiCountries, component: ApiCountries },
  { path: paths.createUser, component: CreateUser },
  { path: paths.placeholder, component: GetPerson }
];

export default routes;
