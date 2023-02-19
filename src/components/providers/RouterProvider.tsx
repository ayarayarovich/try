import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "App"
import { Dashboard } from 'pages/Dashboard';
import { ManageBuildings } from 'pages/ManageBuildings';
import { Error } from 'pages/Error';
import { MyOffice } from 'pages/MyOffice';
import { Main } from 'pages/Main';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/administration",
        // @ts-ignore
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

