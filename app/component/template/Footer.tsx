import React from "react";
import Logo from "../atoms/Logo";
import img from "../../../public/assets/footer-payments.png";
import img2 from "../../../public/assets/footer-sectigo.png";
import LogoWhite from "../atoms/LogoWhite";


function Footer() {
  return (
    <>
      <footer className="bg-black">
        <main className="p-10">
          <ul className="text-white">
            <li className="flex justify-between">
              <a href="/" className="flex">
                <LogoWhite/>
              </a>

              <div className="flex flex-end">
                <a href="/" className="flex">
                  {" "}
                  <i className="fa fa-facebook"></i>{" "}
                </a>
                <a href="/" className="flex">
                  {" "}
                  <i className="fa fa-youtube"></i>{" "}
                </a>
                <a href="/" className="flex">
                  {" "}
                  <i className="fa fa-instagram"></i>{" "}
                </a>
                <a href="/" className="flex">
                  {" "}
                  <i className="fa fa-telegram"></i>{" "}
                </a>
                <a href="/" className="flex">
                  {" "}
                  <i className="fa fa-twitter"></i>{" "}
                </a>
              </div>
            </li>

            <li className="grid grid-cols-4">
              <div className="flex flex-col col-span-1 p-5">
                <a className="w-12 border-b border-b-[#8900a1] py-1">About</a>
                <a className="text-gray-600">
                  We are a travel business that specializes in hotel
                  accommodations for business travel and are looking to expand
                  our offerings shortly to include car rental and airline
                  tickets (offline).
                </a>
              </div>

              <div className="flex flex-col col-span-1 p-5">
                <a className="w-1/3 border-b border-b-[#8900a1] py-1">Quick Links</a>

                <a className="text-gray-600" href="/about">
                  About Us
                </a>
                <a className="text-gray-600" href="/advantage">
                  Services
                </a>
                <a className="text-gray-600" href="/privacy-policy">
                  Privacy Policy
                </a>
                <a className="text-gray-600" href="/terms-of-use">
                  Terms of Use
                </a>
                <a className="text-gray-600" href="/faq">
                  F&amp;Qs
                </a>
              </div>

              <div className="flex flex-col col-span-1 p-5">
                <a className="w-1/3 border-b border-b-[#8900a1] py-1">Contact Us</a>
                <a className="text-gray-600">
                  <span className="material-symbols-outlined icon">phone</span>
                  +20 999 999 9999
                </a>
                <a className="text-gray-600">
                  <span className="material-symbols-outlined icon">mail</span>
                  info@stayexpo.com
                </a>
                <a className="text-gray-600">
                  <span className="material-symbols-outlined icon">
                    location_on
                  </span>
                  Egypt, cairo
                </a>
                <a className="text-gray-600">
                  <span className="material-symbols-outlined icon">phone</span>
                  +20 999 999 9999
                </a>
              </div>

              <div className="flex flex-col col-span-1 p-5">
                <a className="w-1/3 border-b border-b-[#8900a1] py-1">Subscription</a>
                <div className="flex mt-3 subscribe ">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    className="w-2/3 px-2 py-2 bg-transparent border border-r-0 rounded-r-none rounded-l-g"
                  />
                  <button className="px-2 py-1 border-l-0 rounded-lg rounded-l-none bg-bg_banfsgy ">Sign Up</button>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-5">
              <div className="col-span-1">
                <img className="w-2/3" src={img2.src} />
              </div>

              <div className="col-span-3">
                <div className="text-gray-600 border border-[#555] p-4 rounded-xl">
                  StayExpo is an independent and privately owned tour operator.
                  Any names or logos of hotel properties, events or venues may
                  be registered trademarks of their respective holders. Our use
                  of these trademarks does not imply any affiliation with, or
                  endorsement by their owners unless otherwise specified on the
                  relevant webpage.
                </div>

                <p className=""></p>
              </div>

              <div className="col-span-1">
                <img src={img.src}/>
              </div>
            </li>
          </ul>
        </main>

        <div className="flex copyright full-width flex-column">
          <hr />
          <p className="flex full-width flex-space defualt no-select">
            <span>
              StayExpo ® is a registered trademark of 360StayExpo Group ®
            </span>
            <span>
              2016 - 2023 StayExpo®. All rights reserved. powered by SavvyHost
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
