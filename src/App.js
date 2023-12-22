import Applayout from "./Pages/AppLayout";
import Form from "./Pages/Form";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Success from "./Pages/Success";

import Home from "./Pages/Home";
import TokenForm from "./Pages/TokenForm";


function App() {

  const router = createBrowserRouter([
    {element:<Applayout/>,
     children:[
      {
        path:"/",
        element:<Home/>
        
       
     },
      {
       path:"/form",
       element:<Form/>
       
     },{
       path:"/success",
       element:<Success/>
     },{
      path:"/token",
      element:<TokenForm/>
     }]}
  
  ]);


  return (
    <RouterProvider router={router} />

  );
}

export default App;
