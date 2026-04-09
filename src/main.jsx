import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import Apps from "./Pages/Apps/Apps";
import InstallApps from "./Pages/InstallApps/InstallApps";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch('/data.json')
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installApps",
        Component: InstallApps,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
