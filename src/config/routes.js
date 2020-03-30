import Dashboard from "../components/Modules/Dashboard";
import FormNewPerson from "../components/Modules/NewPerson/view";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  person: "/new-person",
  apiCountries: "/ApiCountriesSample"
};

const routes = [
  { path: paths.root, component: Dashboard },

  {
    path: paths.person,
    component: FormNewPerson
  },
  { path: paths.apiCountries, component: ApiCountries }
];
export default routes;
