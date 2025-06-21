import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
const Home = () => {
  return (
    <div className="min-h-screen bg-luxurious-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
