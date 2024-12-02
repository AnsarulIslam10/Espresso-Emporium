import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SIgnUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://espresso-emporium-server-pink.vercel.app/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-server-pink.vercel.app/coffee/${params.id}`),
      },
      {
        path: "coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-server-pink.vercel.app/coffee/${params.id}`),
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: ()=> fetch('https://espresso-emporium-server-pink.vercel.app/users')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
