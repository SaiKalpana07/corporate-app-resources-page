import Card from "@/components/card-container";
import SideBar from "@/components/side-bar";
import React from "react";

export default function page() {
  return (

    <div className="flex">
      <div className="w-1/2 md:w-1/3  p-5">
        <SideBar />
      </div>
      <div className="w-1/2 md:w-2/3 p-5">
        <Card />
      </div>
    </div>
    
  );
}
