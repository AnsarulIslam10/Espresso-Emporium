import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
 {
  path: '/',
  element: <MainLayout></MainLayout>,
  children: [
    {
      path: "/",
      element: <HomePage></HomePage>,
      loader: ()=> fetch('http://localhost:5000/coffee')
    },
    {
      path: 'addCoffee',
      element: <AddCoffee></AddCoffee>
    },
    {
      path: 'updateCoffee/:id',
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]
 },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
