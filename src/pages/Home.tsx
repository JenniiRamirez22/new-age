import Background from "../components/Background";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
//import WeAre from "../components/sections/WeAre";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip text-[#231640]">
      <Background />
      <Header />

      <main className="flex flex-col gap-16 px-6 py-12 md:px-16">
        <Hero />
    
        {/* aquí van las demás secciones */}
      </main>

      <Footer />
    </div>
  );
}
