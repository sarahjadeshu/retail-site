import { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/home";
import Product from "./pages/Product/product";
import Products from "./pages/Products/products";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      }
    ],
  }
]);

function App() {
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
