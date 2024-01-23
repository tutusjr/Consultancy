import React from "react";

//icons
import { GiAchievement } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

export default function Deneyim() {
  return (
    <section
      id="deneyim"
      className=" min-h-[1000px] items-center justify-center flex flex-col bg-white"
    >
      <div className="flex xl:flex-col ml-20 xl:ml-0">
        <div className="shadow-2xl rounded-xl relative xl:h-[400px] xl:w-[1200px] h-[700px] w-[450px] overflow-hidden">
          <img
            src="assets/images/deneyim.png"
            className="w-full h-full object-cover absolute transform scale-150 ml-20 xl:mt-20"
            alt=""
          />
        </div>
        <div>
            <h2 className="h2 ml-5 xl:ml-0 xl:mt-5">Deneyim</h2>
            <p className="p max-w-[900px] text-[15px] ml-5 xl:ml-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi exercitationem nesciunt ab obcaecati ducimus vitae, pariatur placeat voluptatum, voluptate maiores molestias, odit est. Odio enim impedit ratione aspernatur aperiam quisquam voluptas mollitia ex facilis fuga! Dicta repellendus modi aliquam autem voluptas sint saepe dolores eaque tempore? Reprehenderit odit fugiat perspiciatis.</p>
        </div>
        <div></div>
      </div>
      <div className="">asdasd</div>
    </section>
  );
}
