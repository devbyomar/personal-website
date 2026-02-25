import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { FeaturedWork } from "@/components/featured-work";
import { Philosophy } from "@/components/philosophy";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedWork />
        <Philosophy />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
