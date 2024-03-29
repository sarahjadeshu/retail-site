import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Headline from "./components/Headline/Headline";
import Favorites from "./pages/Favorites/Favorites";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Headline />
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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  // Array that stores favorites for wishlist
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  return (
  <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
