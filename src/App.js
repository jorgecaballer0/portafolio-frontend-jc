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

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portafolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
