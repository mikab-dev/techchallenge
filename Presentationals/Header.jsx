import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white mb-20">
      <div className="container mx-auto ">
        <div className="flex justify-between border-b-4 border-solid border-orange-wildColor border-opacity-25">
          <div className="mb-2 mt-2">
            <Image
              src="/logo.png"
              alt="Wild Code School logo"
              width={180}
              height={70}
            />
          </div>
          <h1 className="self-center text-2xl md:text-4xl font-extrabold font-main-menu">
            Les Argonautes
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
