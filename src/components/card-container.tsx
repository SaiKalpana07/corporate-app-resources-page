import React from "react";
import data from "../app/data.json";

function Card() {

  const caseStudies = data.caseStudies;
  const basePath = "/images/card";
  
  return (

    <div>
      <div className="card-container grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((c) => (
          <div key={c.id} className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
              <a href="#">
                <img
                  className="rounded-2xl p-3"
                  alt="product image"
                  src={`${basePath}/${c.image}`}
                />
              </a>
            </div>

            <div className="w-full px-3 pb-5">
              <div className="flex items-center mt-2.5 mb-5">
                <p className="font-inter">{c.content}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="text-white bg-orange-500 rounded-full w-[150px] py-2 px-4 pr-4 flex justify-between items-center text-center text-sm"
                  type="button"
                >
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
