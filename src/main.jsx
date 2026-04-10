import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Routes";
import InstalledAppsProvider from "./Context/InstallAppsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
);
