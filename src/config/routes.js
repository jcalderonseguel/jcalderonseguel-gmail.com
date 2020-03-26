
import Dashboard from "../components/Modules/Dashboard"



export const paths = {
  any: "*",
  root: "/",

};

const routes = [
  { path: paths.root, component: Dashboard },
];

export default routes;