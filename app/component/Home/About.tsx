import Image from "next/image";
import React from "react";
import imgAbout from "../../../public/assets/348889119_3412351595744731_6020599162260497512_n.png";
import Link from "next/link";

function About() {
  return (
    <div className="p-20 contaniner ">
      <div className="grid items-center grid-cols-2 ">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold ">About us</h1>
          <p>
            We are StayExpo and our mission is to streamline the way brands and
            businesses interact with conferences, we’re the one-stop-shop for
            hotels reservation around convention centers.
          </p>
          <Link href="" className="text-[#5d22d5] font-bolder">
            red more
          </Link>
        </div>
        <div className="w-[90%] col-span-1">
          <Image className="w-full" src={imgAbout} alt="lazy" />
        </div>
      </div>
    </div>
  );
}

export default About;
