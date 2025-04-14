// Purpose: main.jsx file to start the client
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TitleScreen from "./pages/TitleScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// create a BrowserRouter instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TitleScreen />,
      },
    ],
  },
]);

// react-dom render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
