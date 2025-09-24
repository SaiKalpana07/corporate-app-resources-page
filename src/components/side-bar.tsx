import React from "react";
import data from "../app/data.json";

function SideBar() {
  const sideBar = data.sideBar;
  return (
    <div>
      <div className=" w-full">
        <ul className="w-[80%] border border-[#D9D9D9] flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li className="mb-0">
            <a
              href="#"
              className="popup inline-flex items-center
                 p-5 sm:text-sm bg-[#2B50A1] text-white active w-full dark:bg-blue-600"
              aria-current="page"
            >
              Case Studies
            </a>
          </li>
          <hr className=" w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />

          {sideBar.map((s) => (
            <div key={s.id}>
              <li key={s.id} className="mb-0">
                <a
                  href="#"
                  key={s.id}
                  className="inline-flex items-center p-5 text-black font-medium rounded-lg w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {s.content}
                </a>
              </li>
              <hr className=" w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
