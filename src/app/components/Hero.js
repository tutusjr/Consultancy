'use client'

import {motion} from 'framer-motion'

//variants
import {fadeIn} from '/variants'
export default function Hero() {
  return (
    <section className="h-screen bg-cyan-200" id="home">
      <div className="relative w-full flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
        <div className="text-center z-10 absolute xl:max-w-xl xl:text-left ml-24 mt-16 xl:mt-0">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h1">
            Sizin için en iyi olan{" "}
            <span className="text-red-700">danışmanlığı</span> belirleyin
          </motion.h1>
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
