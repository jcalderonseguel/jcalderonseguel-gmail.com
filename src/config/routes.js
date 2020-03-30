import Dashboard from "../components/Modules/Dashboard";
import FormNewPerson from "../components/Modules/NewPerson/view";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  apiCountries:"/ApiCountriesSample",
  person: "/new-person"
};

const routes = [
  { path: paths.root, component: Dashboard },
  { path: paths.home, component: Dashboard },
  { path: paths.apiCountries, component: ApiCountries},
  { path: paths.person, component: FormNewPerson }
];

export default routes;
