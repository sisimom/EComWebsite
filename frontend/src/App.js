import { Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
// import {ToastContainer} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          {/* {console.log("<Outlet />", <Outlet />)} */}
          <Container>
            {/* <Router> */}
            <Routes>
              <Route index={true} path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
            {/* </Router> */}
            <Outlet />
          </Container>
        </main>
        <Footer />
      </Router>
      {/* <ToastContainer/> */}
    </>
  );
};

export default App;
