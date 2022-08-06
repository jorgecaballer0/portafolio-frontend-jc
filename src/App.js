import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portafolio from "./components/Portafolio/Portafolio";
// import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Page404 from "./components/Page404/Page404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/servicios" exact element={<Services />} />
        <Route path="/portafolio" exact element={<Portafolio />} />
        {/* <Route path="/"  exact element={<Testimonials />} /> */}
        <Route path="/contacto" exact element={<Contact />} />
        <Route path="/footer" exact element={<Footer />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
