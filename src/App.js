
import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import "./App.scss";
import Form1 from "./component/pages/Form1";
import Page404 from "./component/pages/Page404";
import Homes from "./component/pages/Homes";
import Footer from "./component/pages/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Homes/>} />
        {/*   <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="*" element={<Page404 />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
