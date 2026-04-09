import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import Apps from "./Pages/Apps/Apps";
import InstallApps from "./Pages/InstallApps/InstallApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <h2>home page</h2>,
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
    errorElement: <h2>this page is not found</h2>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
