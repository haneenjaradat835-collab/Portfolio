import { React } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <div>
        <Portfolio />
      </div>

      <section id="contact">
        <Contact />
      </section>
      {/* <section id="About">About</section> */}
    </div>
  );
}

export default App;
