import Dashboard from "../components/Modules/Dashboard";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";
import admin from '../components/Modules/Admin/view';
export const paths = {
  any: "*",
  root: "/",
  apiCountries:"/ApiCountriesSample",
  admin: '/admin'
};

const routes = [
    { path: paths.root, component: Dashboard },
    { path: paths.apiCountries, component: ApiCountries},
    { path: paths.admin, component: admin}
  
];


export default routes;
