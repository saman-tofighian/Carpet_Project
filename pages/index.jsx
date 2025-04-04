import Advertisement from "@/Components/Advertisement/Advertisement";
import Frame from "@/Components/Frame/Frame";
import Frame2 from "@/Components/Frame/Frame2";
import Header from "@/Components/Header/Header";
import Motto from "@/Components/Motto/Motto";

function Home() {
  return ( 
    <main className="w-[100vw] overflow-x-hidden">
      <Header />
      <Motto />
      <Frame />
      <Frame2 />
      <Advertisement />
    </main>
   );
}

export default Home;