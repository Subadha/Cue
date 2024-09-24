import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home/Home";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import Home4 from "@/components/Home/Home4";
import Home5 from "@/components/Home/Home5";
import Footer from "@/components/Home/Footer";
import { Home6 } from "@/components/Home/Home6";
import Home7 from "@/components/Home/Home7";
export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Home2 props={"Crafting Fashion with Natures Essence"}/>
      <Home3/>
      <Home4/>
      <Home2 props={""}/>
      <Home5/>
      <Home6/>
      <Home7/>
      <Footer/>
    </div>
  );
}
