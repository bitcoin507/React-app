import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Captain Crypto's Coding Portfolio</code>
      
      </div>
      <a href="#projects"><button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
        <code>Check out my Projects !</code>
      </button></a>
    </div>
  );
}

export default Header;
