import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Features from "@/components/Features";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Journey />
        <Features />
        <Services />
        <CtaBanner />
        <GlobalReach />
        <Testimonials />
        <Products />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
