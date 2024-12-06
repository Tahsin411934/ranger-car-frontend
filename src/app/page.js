export const dynamic = "force-dynamic";
import Image from "next/image";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Popular_Caragory from "./Components/Popular_Catagory/Popular_Caragory";
import Catagory from "./Components/Catagory/Catogory";
import Count_FAQ from "./Components/Count_FAQ/Count_FAQ";



export default function Home() {
  return (

    <main className="bg-[#F3F4F6]">

     <Banner/>
      <Popular_Caragory/>
      <Catagory/>
<Count_FAQ/>

    </main>


  );
}