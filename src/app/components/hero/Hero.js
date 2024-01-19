//motion frame
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="h-screen bg-cyan-200" id="home">
      <div className="relative w-full flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
        <div className="text-center z-10 absolute xl:max-w-xl xl:text-left ml-24 mt-16 xl:mt-0">
          <h1

          className="h1">
            Sizin için en iyi olan{" "}
            <span className="text-red-700">danışmanlığı</span> belirleyin
          </h1>
        </div>
        <img
          className="object-cover h-screen max-w-full w-full filter brightness-75"
          src="assets/images/hero.png"
          alt="resim"
        />
      </div>
    </section>
  );
}
