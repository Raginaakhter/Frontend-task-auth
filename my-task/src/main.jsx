import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App';

import Login from './Authentation/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

       {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
