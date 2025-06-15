import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Page404 from "./component/pages/Page404";
import Home from "./component/pages/Home";
import Footer from "./component/pages/Footer";
import Project from "./component/pages/Project";
import Contact from "./component/pages/Contact";
import Store from "./component/pages/Store";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          
          {/* ✅ 404 catch-all route */}
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
