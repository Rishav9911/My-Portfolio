import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills.jsx";
import Experience2 from "./components/Experience2/Experience2.jsx";
import './App.scss';
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contacts/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Experience3 from "./components/Experience2/Experience3.jsx";
import Experience4 from "./components/Experience2/Experience4.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {

  return (
    <div>
     <Cursor/>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
     
      <section id="About"><Parallax content="More about me?" type="about"/></section>
      <section><About/></section>

    <section id="Experience"><Parallax content="A Tech Enthusiast?" type="experience"/></section>
    <section><Experience2/></section>
    <section><Experience3/></section>
    <section><Experience4/></section>

    <section id="Skills"><Parallax content="Skills" type="skills"/></section>
    <section><Skills/></section>

    <section id="Projects"><Parallax content="Featured projects" type="projects"/></section>
    <Portfolio/>

    <section id="Contact"><Contact/></section>
 
     <div className="footer">
    <Footer/>
     </div>
  
    </div>
  )
}

export default App
