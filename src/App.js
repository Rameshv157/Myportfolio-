import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    {/* <footer className="fixed">
      <Footer />
    </footer> */}
  </BrowserRouter>
);

export default App;
