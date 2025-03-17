import EditProject from "../components/edit-card/edit-card";
import EditSampleWork from "../components/edit-sample-work/edit-sample-work";
import PrivateRoute from "../components/private-route/private-route";
import About from "../pages/about/about";
import Card from "../pages/card/card";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Panel from "../pages/panel/panel";
import Policy from "../pages/policy/policy";
import SampleWork from "../pages/sample-work/sample-work";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit-card/:id",
    element: <EditProject />,
  },
  {
    path: "/edit-sample-work/:id",
    element: <EditSampleWork />,
  },
  // {
  //   path: "/panel",
  //   element: <Panel />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/sample-work",
    element: <SampleWork />,
  },
  {
    path: "/card/:cardId",
    element: <Card />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:'/panel',
    element: <PrivateRoute />,
    children:[
      {path:"",element:<Panel/>}
    ]
  }
];
export default routes;
