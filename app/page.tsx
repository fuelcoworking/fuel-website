import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Workspaces from "@/components/Workspaces";
import Events from "@/components/Events";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Intro />
      <Workspaces />
      <Events />
      <Mission />
      <Contact />
      <Footer />
    </main>
  );
}
