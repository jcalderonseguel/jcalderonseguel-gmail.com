import Dashboard from "../components/Modules/Dashboard";
import FormNewPerson from "../components/Modules/NewPerson/view";
import ApiCountries from "../components/Modules/Maintainers/Countries/view";

import Admin from '../components/Modules/Admin/view';
import CreateUser from "../components/Access/CreateUser/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  person: "/new-person",
  apiCountries: "/ApiCountriesSample",
  createUser: "/CreateUser",
  admin: '/admin',
};



const routes = [
    { path: paths.root, component: Dashboard },
    { path: paths.apiCountries, component: ApiCountries},
    { path: paths.admin, component: Admin},
    {
      path: paths.person,
      component: FormNewPerson,
    },
    { path: paths.createUser, component: CreateUser}
  
];


export default routes;
