"use client";

import { useState } from "react";
import { Quantitiy } from "./Quantitiy";
import {
  IconGitBranchDeleted,
  IconHttpDelete,
  IconSquareRoundedLetterP,
} from "@tabler/icons-react";
import Button from "./Button";

function DropDown() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left w-[100%] ">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-between  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#adb5bd] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            onClick={() => (!open ? setOpen(true) : setOpen(false))}
          >
            0 guesets
            <svg
              className="w-5 h-5 -mr-1 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div
            className="absolute p-3 right-0 z-10 w-[100%] mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="flex items-center justify-center border-b-black ite ify-between item">
              <div className="w-1/3">
                <h3>Room 1</h3>
              </div>
              <div className="flex items-center justify-end ">
                <p className="p-2 text-sm">Adults</p>
                <div className="flex justify-end px-2 pb-1">
                  <Quantitiy />
                </div>
              </div>
              <div>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="24px"
                  height="24px"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ff0000"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.80664,2c-0.517,0 -1.01095,0.20431 -1.37695,0.57031l-0.42969,0.42969h-5c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h16c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-5l-0.42969,-0.42969c-0.365,-0.366 -0.85995,-0.57031 -1.37695,-0.57031zM4.36523,7l1.52734,13.26367c0.132,0.99 0.98442,1.73633 1.98242,1.73633h8.24805c0.998,0 1.85138,-0.74514 1.98438,-1.74414l1.52734,-13.25586z"></path>
                    </g>
                  </g>
                </svg>
                
              </div>
              
            </div>
            <div>
            <Button
            children="Add Room "
            variant="primary"
            className="p-1 px-4 w-[40%] mt-5"
          />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
