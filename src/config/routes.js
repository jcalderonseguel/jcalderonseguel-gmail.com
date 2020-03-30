import Dashboard from "../components/Modules/Dashboard";
import admin from '../components/Modules/Admin/view';

export const paths = {
  any: "*",
  root: "/",
  admin: '/admin'
};

const routes = [{ path: paths.root, component: Dashboard }, { path: paths.admin, component: admin}];

export default routes;
