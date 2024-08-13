import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Nav } from "./components";
import { Home , SinglePro } from "./page";
import { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { AdminHome } from "./admin/pages";

export default function App() {
  const [loading , setLoading] = useState(false)
  return (
    <>
      <Router>
        {
          loading ? <Spinner /> :
          <>
          <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<SinglePro />} />
        </Routes>
        <Footer />
          </>
        }

        <Routes>
        <Route path="/add-pro" element={<AdminHome />} />
        </Routes>
      </Router>
    </>
  );
}
