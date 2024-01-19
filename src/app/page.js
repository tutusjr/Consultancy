//components
import Header from "./components/Header"
import Footer from "./components/Footer"
import NedenBiz from "./components/NedenBiz"
import Contact from "./components/Contact"
import Copyright from "./components/Copyright"
import Hakkimizda from "./components/Hakkimizda"
import BackToTop from "./components/BackToTop"
import Hero from "./components/hero/Hero"

export default function Home() {
  return (
    <main className="bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Hakkimizda />
      <NedenBiz />
      <Contact />
      <Footer />
      <BackToTop />
      <div className="h-[4000px]"></div>
    </main>
  )
}
