import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/skills",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default Routes;
