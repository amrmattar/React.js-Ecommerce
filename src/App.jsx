import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
