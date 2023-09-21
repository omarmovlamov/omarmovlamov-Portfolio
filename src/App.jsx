import "./App.css";
import { lazy } from "react";
import { Banner } from "./components/banner";
import Achievements from "./components/Achievements";
import { ContactMe } from "./components/ContactMe";
const Services = lazy(() => import("./components/Services"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Header = lazy(() => import("./components/Header"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Projects />
      <Achievements />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
