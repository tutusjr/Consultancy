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
    triggerOnce: true
  })

  return (
    <section
      ref={ref}
      id="deneyim"
      className=" min-h-[800px] flex flex-col mt-20 justify-center items-center bg-white"
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
            <p className="p max-w-[800px] xl:max-w-[1200px] mx-5 text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vero iusto dolorum tenetur quasi. Consectetur vel in, temporibus esse animi voluptas provident nobis. Hic commodi, animi distinctio dignissimos, laborum minima eveniet id aperiam pariatur quas ex? Provident numquam fugit distinctio deserunt inventore, sunt doloremque nobis quibusdam nisi et itaque. Nostrum, nam deleniti nesciunt similique dolores magni laborum quos consequatur ipsam quia dicta perferendis numquam dolore neque perspiciatis aliquid, veritatis, id earum nulla harum dolorem placeat fugiat mollitia corporis! Ipsum quod optio, minima rem atque beatae omnis molestiae similique eos, alias rerum nemo! Eius assumenda officia dolorum tempora, aperiam omnis at.</p>
            <div className="flex items-center gap-x-20 justify-center mt-5">
            <div className=" grid place-items-center">
              <GiAchievement className="text-5xl text-accent"/>
              <div className="text-3xl font-black mb-2">
                {inView ? (
                  <CountUp start={0} end={100}  duration={3} />
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
