import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/InstallApps/InstallApps";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/installApps",
        element: <InstallApps />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
