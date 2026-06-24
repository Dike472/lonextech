import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Resume from "./components/sections/Resume";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
