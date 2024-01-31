'use client'

import {motion} from 'framer-motion'

//variants
import {fadeIn} from '/variants'

//buttons
export default function Hero() {
  return (
    <section className="h-screen bg-cyan-200" id="home">
      <div className="relative w-full flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
        <div className="text-center h-[600px] justify-center flex flex-col z-10 absolute xl:max-w-xl xl:text-left xl:ml-24 mt-16 xl:mt-0 ">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h1 z-50 xl:mx-0 mx-10">
            Sizin için en iyi olan{" "}
            <span className="text-red-700">danışmanlığı</span> belirleyin
          </motion.h1>
          <motion.p
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }} 
          className='font-bold text-xl text-primary xl:mx-0 mx-10 text-shadow-lg shadow-black/30'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sed accusantium velit aut excepturi eius?
          </motion.p>
        </div>
        <img
          className="object-cover  h-screen max-w-full w-full filter brightness-90"
          src="assets/images/hero.png"
          alt="resim"
        />
      </div>
    </section>
  );
}
