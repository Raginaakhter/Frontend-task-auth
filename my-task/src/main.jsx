import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App';
import RegisterForm from "./Authentation/RegisterForm";

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
          {
        path: "/register",
        element:<RegisterForm></RegisterForm>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
