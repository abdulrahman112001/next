import React from "react";
import Button from "../atoms/Button";

function Subme() {
  return (
    <div className="p-10 text-center bg-bg_banfsgy">
      <div>
        <h1 className="text-3xl font-bold text-white">Only pay when you travel</h1>

        <p className="mt-4 text-white">
          Our best-in-class travel management solution will help you save on
          travel expenses quickly and easily.
        </p>

        <p className="mt-4 text-white">
          And you only pay for our software in a month where you make a booking,
          with no hidden fees.
        </p>

        <Button children="Sign Up" className="px-10 py-2 mt-5 text-black bg-white" />
      </div>
    </div>
  );
}

export default Subme;
