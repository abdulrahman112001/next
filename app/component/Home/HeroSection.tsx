"use client";

import React from "react";
import Button from "../atoms/Button";
import SearchForm from "../atoms/SearchForm";
import DateInputComp from "../atoms/DateInput";
import { t } from "i18next";
import DropDown from "../atoms/DropDown";
import { useForm } from "@mantine/form";

function HeroSection() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="container p-20">
      <div className="grid grid-cols-2 px-5">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">
            RateHawk is a service for booking hotels, air tickets and other
            travel services for professionals
          </h1>
          <p className="mt-2">
            1,900,000 hotels, car rental, and other services throughout the
            world
          </p>
          <Button
            children="sign up"
            variant="primary"
            className="p-2 px-4 w-[40%] mt-5"
          />
        </div>
        <div className="col-span-1 ">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <div className="w-[60%] ml-auto ">
              <div className="p-3 shadow-2xl rounded-xl">
                <SearchForm />
                <div className="grid grid-cols-2 mt-4">
                  <div className="col-span-2">
                    <DateInputComp placeholder="Check-in - Check-out " />
                  </div>
                </div>
                <div className="mt-4">
                  <DropDown />
                </div>
                <Button
                  children="Explore Hotels"
                  variant="primary"
                  className="p-2 px-4 w-[100%] mt-5"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
