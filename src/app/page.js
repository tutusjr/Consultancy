//components
import Header from "./components/Header"
import Footer from "./components/Footer"
import NedenBiz from "./components/NedenBiz"
import Contact from "./components/Contact"
import Copyright from "./components/Copyright"
import BackToTop from "./components/BackToTop"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <NedenBiz />
      <Contact />
      <Footer />
      <BackToTop />
      <div className="h-[4000px]"></div>
    </main>
  )
}
