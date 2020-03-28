import Dashboard from "../components/Modules/Dashboard";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";
export const paths = {
  any: "*",
  root: "/",
  apiCountries:"/ApiCountriesSample"
};

const routes = [
    { path: paths.root, component: Dashboard },
    { path: paths.apiCountries, component: ApiCountries}
  
];

export default routes;
