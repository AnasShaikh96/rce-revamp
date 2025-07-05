import { Image } from "astro:assets";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-20 bg-amber-300">
      <div className="h-full flex justify-between px-5 items-center">
        <div>
          <Image
            height={200}
            width={200}
            src="/images/rceLogoLight.svg"
            alt="Rce Logo Light"
          />
        </div>
        <div>Cinon</div>
      </div>
    </nav>
  );
};

export { Navbar };
