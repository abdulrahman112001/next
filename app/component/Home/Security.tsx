import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/americanExpress.b3d0158b.png";
import img2 from "../../../public/assets/comodo.8b7192eb.png";
import img3 from "../../../public/assets/decta.4e998eab.png";
import img4 from "../../../public/assets/351782734_805374517490850_1285298802741953849_n.png";
import img5 from "../../../public/assets/stripe.bdb07a0f.png";

function Security() {
  return (
    <div className="bg-[#f8f8f8] p-20 mt-10">
      <h1 className="text-3xl font-bold ">Security</h1>
      <p className="w-1/2">
        Our partners guarantee the security of your data and payments with their
        global reputation.
      </p>
      <div className="grid items-center justify-center grid-cols-5 mt-8">
        <div className="w-[60%]">
          <Image className="w-full" src={img1} alt="lazy" />
        </div>
        <div className="w-[60%]">
          <Image className="w-full" src={img2} alt="lazy" />
        </div>
        <div className="w-[60%]">
          <Image className="w-full" src={img3} alt="lazy" />
        </div>
        <div className="w-[60%]">
          <Image className="w-full" src={img4} alt="lazy" />
        </div>
        
        <div className="w-[60%]">
          <Image className="w-full" src={img5} alt="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Security;
