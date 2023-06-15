import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/global/header";
import Background from "@/components/global/background";
import Main from "@/components/global/main";
import OurServices from "@/components/global/ourService";
import Footer from "@/components/global/footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
     <span id="tapatrip" />
      <Header />
      <Background />
      <span id="ourservices" />
      <OurServices />
      <span id="customer" /> 
      <Footer/>
    </main>
  );
}
