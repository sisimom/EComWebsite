import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

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
            </Routes>
            {/* </Router> */}
            <Outlet />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
