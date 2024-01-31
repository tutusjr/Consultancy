'use client'

import { useInView } from "react-intersection-observer";
import React from "react";

//icons
import { GiAchievement } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

//motion
import {motion} from 'framer-motion'
import {fadeIn} from '/variants'

import CountUp from 'react-countup';

export default function Deneyim() {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section
      ref={ref}
      id="deneyim"
      className=" min-h-[1000px] flex flex-col justify-center items-center bg-white"
    >
      <div className="z-10 -mt-20">
      <div className="shadow-2xl flex flex-shrink-1 rounded-2xl overflow-hidden relative min-h-[400px] xl:w-[1200px] min-w-[300px] lg:w-[800px] w-[350px] sm:w-[650px] mb-10 transition-all duration-300">
          <img
            src="assets/images/deneyim.png"
            className="object-cover h-full w-full absolute"
            alt=""
          />
      </div>
      </div>
      <div>
            <h2 className="h2 grid place-items-center xl:mt-5 uppercase mb-5">Deneyim</h2>
            <p className="p max-w-[1200px] mx-5 text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi exercitationem nesciunt ab obcaecati ducimus vitae, pariatur placeat voluptatum, voluptate maiores molestias, odit est. Odio enim impedit ratione aspernatur aperiam quisquam voluptas mollitia ex facilis fuga! Dicta repellendus modi aliquam autem voluptas sint saepe dolores eaque tempore? Reprehenderit odit fugiat perspiciatis.</p>
            <div className="flex items-center gap-x-20 justify-center mt-10">
            <div className=" grid place-items-center">
              <GiAchievement className="text-5xl text-accent"/>
              <div className="text-3xl font-black mb-2">
                {inView ? (
                  <CountUp start={0} end={100} duration={3}/>
                ): null}
                +
              </div>
              <div className="uppercase text-[13px] font-semibold text-secondary">
                Başarımlar
              </div>
            </div>
            <div className="grid place-items-center">
              <MdWorkHistory className="text-5xl text-accent"/>
              <div className="text-3xl font-black mb-2">
                {inView ? (
                  <CountUp start={0} end={30} duration={3}/>
                ): null}
                +
              </div>
              <div className="uppercase text-[13px] font-semibold text-secondary">
                Yıl Deneyim
              </div>
            </div>
            </div>
      </div>
    </section>
  );
}
