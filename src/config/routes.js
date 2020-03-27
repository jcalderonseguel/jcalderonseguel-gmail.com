import Dashboard from "../components/Modules/Dashboard";
import FormNewPerson from "../components/Modules/NewPerson/view";

export const paths = {
  any: "*",
  root: "/",
  home: "/home",
  person: "/new-person"
};

const routes = [
  { path: paths.root, component: Dashboard },
  { path: paths.home, component: Dashboard },
  { path: paths.person, component: FormNewPerson }

];

export default routes;
