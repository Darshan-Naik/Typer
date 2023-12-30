import { RiKeyboardBoxFill } from "@remixicon/react";
import React from "react";

const Header = () => {
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex gap-2 border border-primary rounded-full py-2 pl-2 pr-8">
        <RiKeyboardBoxFill className="ml-2" size={32} />
        <h1 className="text-2xl font-semibold">Typer</h1>
      </div>

      <a
        href="https://github.com/Darshan-Naik/Typer"
        target="_blank"
        className=" underline underline-offset-2 text-secondary"
      >
        Github
      </a>
    </div>
  );
};

export default Header;
