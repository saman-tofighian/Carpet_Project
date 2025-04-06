import Advertisement from "@/Components/Advertisement/Advertisement";
import Footer from "@/Components/Footer/Footer";
import Frame from "@/Components/Frame/Frame";
import Frame2 from "@/Components/Frame/Frame2";
import Header from "@/Components/Header/Header";
import Motto from "@/Components/Motto/Motto";
import Slider1 from "@/Components/Slider/Slider1";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.addEventListener('focus' , () =>{
      document.title = 'سامان توفیقیان'
    })
    window.addEventListener('blur' , () =>{
      document.title = 'برگرد به سایت عزیزم 😘'
    })
  }, []);
  return ( 
    <main className="w-[100vw] overflow-x-hidden">
      <Header />
      <Motto />
      <Frame />
      <Slider1 />
      <Frame2 />
      <Advertisement />
      <Footer />
    </main>
   );
}

export default Home;