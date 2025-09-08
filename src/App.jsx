import Body from "./component/Body";
import Nav from "./component/Nav";
import About from "./component/About";
import  Resdetails from './component/Resdetails'
import { createBrowserRouter, Outlet } from "react-router-dom";
import Classabout from "./component/Classabout";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Outlet/>
    </div>
  );
}

const approuter = createBrowserRouter([
  { path: "/", element: <App />,
  children:[
    { path: "/", element: <Body/> },
    { path: "/about", element: <Classabout name={"Abhihek is best developer of the world"} course={"i wanna be become the best who get 1 crore package "}/> },
    { path: "/res/:id", element: <Resdetails/> },
  ]
  },
]);

export default approuter; // 👈 export the router
