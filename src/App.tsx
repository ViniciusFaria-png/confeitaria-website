import "./App.css";
import { About, Contact, Footer, Gallery, Hero, Menu } from "./components";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <Hero></Hero>
      <About></About>
      <Menu></Menu>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
