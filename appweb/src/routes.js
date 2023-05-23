// core components
import Dashboard from "views/practica1/Dashboard.js";
import Libros from "views/practica1/Libros";
// @material-ui/icons components
import FlashOn from "@material-ui/icons/FlashOn";
import Tv from "@material-ui/icons/Tv";
import BookIcon from '@material-ui/icons/Book';

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/libros",
    name: "Libros",
    icon: BookIcon,
    iconColor: "Error",
    component: Libros,
    layout: "/admin",
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
  },
  {
    href:
      "",
    name: "Getting started",
    icon: FlashOn,
  },
];
export default routes;
