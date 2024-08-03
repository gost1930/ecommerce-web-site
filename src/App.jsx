import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Nav } from "./components";
import { Home , SinglePro } from "./page";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<SinglePro />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
