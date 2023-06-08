import React from "react";
import Button from "./atoms/Button";

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-2 px-5">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">
            RateHawk is a service for booking hotels, air tickets and other
            travel services for professionals
          </h1>
          <p className="mt-2">
            1,900,000 hotels, car rental, and other services throughout the
            world
          </p>
          <Button children="sign up" variant="primary" className="p-2 px-4 w-[40%] mt-5"/>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default HeroSection;
