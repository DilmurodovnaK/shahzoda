import About from "./components/about";
import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2";
import Blog3 from "./components/blog3";
import Blog4 from "./components/blog4";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Shaxsiy from "./components/shaxsiy";

export default function App() {
  return (
    <main className='flex flex-col items-center container mx-auto'>
     <Navbar/>
      <Intro/>
      <About/>
      <Services/>
      <Blog1/>
      <Blog2/>
      <Blog4/>
      <Blog3/>
      <Shaxsiy/>
      <Footer/>
      </main>
  )
}