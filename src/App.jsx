import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { AppLayout } from "./Components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./Components/UI/ErrorPage";
import { CountryDetails } from "./Components/Layout/CountryDetails";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <div>
          <Home></Home>
          <About></About>
        </div>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "country",
        element: <Country></Country>,
      },
      {
        path:"country/:id",
        element:<CountryDetails></CountryDetails>

      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
