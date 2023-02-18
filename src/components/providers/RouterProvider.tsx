import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "App"
import { Dashboard } from 'pages/Dashboard';
import { ManageBuildings } from '../../pages/ManageBuildings';
import { Error } from '../../pages/Error';
import { MyOffice } from '../../pages/MyOffice';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/administration",
        element: <ManageBuildings/>
      },
      {
        path: "/office",
        element: <MyOffice/>
      }
    ]
  }
])

const MyRouterProvider = () => {
  return <RouterProvider router={router}/>
};

export default MyRouterProvider;

