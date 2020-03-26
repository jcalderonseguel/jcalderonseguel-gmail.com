
import Dashboard from "../components/Modules/dashboard"



export const paths = {
  any: "*",
  root: "/",

};

const routes = [
  { path: paths.root, component: Dashboard },
];

export default routes;