
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Improvepage from "layouts/improvement/Improvepage";

import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";

import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";

import CreditCard from "examples/Icons/CreditCard";
import UploadPage from "layouts/upload/UploadPage";

import ChatBot from "layouts/chat/ChatBot";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Statements",
    key: "statenments",
    route: "/statements",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Insights",
    key: "Insights",
    route: "/insights",
    icon: <Office size="12px" />,
    component: <Improvepage />,
    noCollapse: true,
  },
  {
    type:"collapse",
    name:"Chatbot",
    key:"chatbot",
    route:"/chatbot",
    icon:<Shop size="12px" />,
    component: <ChatBot />,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Upload",
  //   key: "upload",
  //   route: "/upload",
  //   icon: <Shop size="12px" />,
  //   component: <UploadPage/>,
  //   noCollapse: true,
  // }
  
];

export default routes;
